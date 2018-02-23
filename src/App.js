import React, { Component } from 'react';
import './App.css';
import CongratsVideo from './congrats.mp4';
import {
	questionsConfigDemo,
	answersConfigDemo
} from './data';
import {
	questionsConfig1,
	answersConfig1
} from './data/ques-ans-set-1';
import {
	questionsConfig2,
	answersConfig2
} from './data/ques-ans-set-2';
import {
	questionsConfig3,
	answersConfig3
} from './data/ques-ans-set-3';
import {
	questionsConfig4,
	answersConfig4
} from './data/ques-ans-set-4';
import {
	questionsConfig5,
	answersConfig5
} from './data/ques-ans-set-5';
import {
	questionsConfig6,
	answersConfig6
} from './data/ques-ans-set-6';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionsConfig: [],
			answersConfig: [],
			showQuestion: false,
			quesSubSequence: 0,
			quesSequence: 0,
			congratsMsg: false,
			showStartingNos: true
		};
		this.isFirstLoad = true;
		this.currentQuesObj = null;
		this.quesRelatedAns = [];
	}

	questionDisplay = () => {
		let {
			quesSequence,
			quesSubSequence,
			answersConfig
		} = this.state;
		if (this.isFirstLoad) {
			quesSequence = 1;
			this.isFirstLoad = false;
		}

		let ques = [];
		this.state.questionsConfig.forEach((item, index) => {
			if (item.sequence === quesSequence) {
				if (quesSubSequence && item.subQuestionsConfig) {
					item.subQuestionsConfig.forEach(subItem => {
						if (subItem.subSequence === quesSubSequence) {
							ques.push(
								<div
									key={index}
									className="ques"
								>
									<p>{subItem.subQuestion}</p>
								</div>
							);
							this.currentQuesObj = { ...subItem, sequence: item.sequence };
							this.quesRelatedAns = [];
							answersConfig.forEach(ansItem => {
								if (ansItem.sequence === item.sequence && ansItem.subSequence === subItem.subSequence && (!ansItem.isRelatedToSubQues || ansItem.isRightAns)) {
									this.quesRelatedAns.push(ansItem);
								}
							});
						}
					});
				} else {
					if (item) {
						ques.push(
							<div
								key={index}
								className="ques"
							>
								<p>{item.question}</p>
							</div>
						);
						this.currentQuesObj = item;
						this.quesRelatedAns = [];
						answersConfig.forEach(ansItem => {
							if (ansItem.sequence === item.sequence && (ansItem.isRelatedToSubQues || !ansItem.subSequence)) {
								this.quesRelatedAns.push(ansItem);
							}
						});
					}
				}
			}
		});
		return ques;
	}

	ansClicked = (ansObj) => {
		if (ansObj.isDisabled) {
			alert('Wrong Answer');
			return;
		} else {
			if (this.currentQuesObj) {
				if (this.currentQuesObj.sequence && ansObj.sequence && ansObj.sequence !== this.currentQuesObj.sequence) {
					alert('Wrong Answer');
					return;
				} else {
					let relatedAns = this.quesRelatedAns.find(item => item.ans === ansObj.ans);
					if (!relatedAns) {
						alert('Wrong Answer');
						return;
					}
				}
			}
			let quesSequence = ansObj.sequence, quesSubSequence = 0;
			//sub questions
			if (ansObj.subSequence) {
				quesSubSequence = ansObj.subSequence;
				if (ansObj.isRightAns) {
					let quesObj = this.state.questionsConfig.find(item => item.sequence === ansObj.sequence);
					if (quesObj.subQuestionsConfig) {
						let subQuesObj = quesObj.subQuestionsConfig.find(item => item.subSequence === ansObj.subSequence + 1);
						if (subQuesObj) {
							quesSubSequence++;
						} else {
							// if (quesSequence === this.state.questionsConfig.length) {
							// 	this.setState({ congratsMsg: true });
							// }
							quesSubSequence = 0;
						}
					}
				}
			}
			let answersConfig = this.state.answersConfig;
			answersConfig.forEach(item => {
				if (item.ans === ansObj.ans) item.isDisabled = true;
			});
			//main questions
			if (ansObj.isRightAns && !ansObj.subSequence) {
				if (quesSequence < this.state.questionsConfig.length) {
					quesSequence++;
				}
				else {
					this.setState({ congratsMsg: true });
				}
			}
			this.setState({ answersConfig, showQuestion: true, quesSequence, quesSubSequence });
		}
	}

	serachAns = () => {
		this.setState({ showQuestion: false });
	}

	ansDisplay = () => {
		let ans = this.state.answersConfig;
		//randomely sort the ans
		ans = ans.sort(() => Math.random() * 2 - 1);

		ans = this.state.answersConfig.map((item, index) =>
			<div
				key={index}
				className={`ans-box`}
				onClick={
					() => this.ansClicked(item)
				}
			>
				<span>{item.ans}</span>
			</div>
		);
		return ans;
	}

	selectSet = (setNo) => {
		let questionsConfig = [];
		let answersConfig = [];
		switch (setNo) {
			case 1:
				questionsConfig = questionsConfig1;
				answersConfig = answersConfig1;
				break;

			case 2:
				questionsConfig = questionsConfig2;
				answersConfig = answersConfig2;
				break;

			case 3:
				questionsConfig = questionsConfig3;
				answersConfig = answersConfig3;
				break;

			case 4:
				questionsConfig = questionsConfig4;
				answersConfig = answersConfig4;
				break;

			case 5:
				questionsConfig = questionsConfig5;
				answersConfig = answersConfig5;
				break;

			case 6:
				questionsConfig = questionsConfig6;
				answersConfig = answersConfig6;
				break;

			case 'DEMO':
				questionsConfig = questionsConfigDemo;
				answersConfig = answersConfigDemo;
				break;

			default:
				questionsConfig = questionsConfig1;
				answersConfig = answersConfig1;
				break;
		}
		this.setState({
			questionsConfig,
			answersConfig,
			showStartingNos: false,
			showQuestion: true
		});
	}

	render() {
		const {
			congratsMsg,
			showQuestion,
			showStartingNos
		} = this.state;

		return (
			<div className="App">
				{
					showStartingNos ?
						<div>
							<div className="ques-set-wrapper">
								<h1>National Science Day - 2018</h1>
								<h2>Science Rumble</h2>
								<div onClick={() => this.selectSet(1)} className="ques-set-no-wrapper"><span>1</span></div>
								<div onClick={() => this.selectSet(2)} className="ques-set-no-wrapper"><span>2</span></div>
								<div onClick={() => this.selectSet(3)} className="ques-set-no-wrapper"><span>3</span></div>
								<div onClick={() => this.selectSet(4)} className="ques-set-no-wrapper"><span>4</span></div>
								<div onClick={() => this.selectSet(5)} className="ques-set-no-wrapper"><span>5</span></div>
								<div onClick={() => this.selectSet(6)} className="ques-set-no-wrapper"><span>6</span></div>
								<div onClick={() => this.selectSet('DEMO')} className="ques-set-no-wrapper"><span className="demo-text">DEMO</span></div>
							</div>
						</div>
						:
						congratsMsg ?
							<div>
								<h2 className="congrats-heading">Congratulations!!!</h2>
								<video autoplay="autoplay" loop="loop">
									<source src={CongratsVideo} type='video/mp4' />
								</video>
							</div>
							:
							showQuestion ?
								<div className="questions-wrapper">
									{this.questionDisplay()}
									<a className="btn" onClick={this.serachAns}>Search Answer</a>
								</div>
								:
								<div className="ans-wrapper">
									{this.ansDisplay()}
								</div>
				}
			</div>
		);
	}
}

export default App;
