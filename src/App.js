import React, { Component } from 'react';
import './App.css';
import {
	questionsConfig,
	answersConfig
} from './data';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionsConfig,
			answersConfig,
			showQuestion: true,
			quesSubSequence: 0,
			quesSequence: 0,
			congratsMsg: false,
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
							if (quesSequence === this.state.questionsConfig.length) {
								this.setState({ congratsMsg: true });
							}
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

	render() {
		const {
			congratsMsg,
			showQuestion
		} = this.state;
		return (
			<div className="App">
				{
					congratsMsg ?
						<h1>Congratulations!!!</h1>
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
