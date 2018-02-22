export const questionsConfig4 = [
    {
        question: ' 1. The process of conversion of liquid to vapour at any temperature is _________',
        sequence: 1,
        subQuestionsConfig: [
            {
                subQuestion: ' 2. Which of the following has Shortest Wavelength : Ultraviolet , Visible Light , Infrared ',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 2. What is the point where resultant magnetic field strength is zero?',
        sequence: 2,
        subQuestionsConfig: [
            {
                subQuestion: ' 3. Milk is a poor source of : Calcium , Sodium , Iron',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 3.  Which Vitamin is also known as " Anti-Haemorrhagic "',
        sequence: 3,
        subQuestionsConfig: [
            {
                subQuestion: ' 4. The reaction where loss of Hydrogen atom takes place is _________',
                subSequence: 1
            }
        ]
    },
    {
        question: ' 4. ________ is produced when metals reacts with acids.',
        sequence: 4,
        subQuestionsConfig: [
            {
                subQuestion: ' 5. Material of Rain Proof Coats and Tents owe their water proof properties to? ',
                subSequence: 1
            },
            {
                subQuestion: ' 6.  Breeding of Bees is called as ___________',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 5. At what temperature will the Fahrenheit and Celsius scale have the same value ',
        sequence: 5,
        subQuestionsConfig: [
            {
                subQuestion: ' 6. If cream is separated from milk , the density of milk will____________',
                subSequence: 1
            },
            {
                subQuestion: ' 7.  The bacteria used in conversion of milk to curd is ____________ shaped',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 6.  Colourless plastids are known as',
        sequence: 6,
        subQuestionsConfig: [
            {
                subQuestion: ' 7. __________was the first spaceship to land on moon ?',
                subSequence: 1
            },
            {
                subQuestion: ' 8.  Total number of Premolar Teeth in Human adult are___________.',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 7. The energy possessed by an oscillating pendulum of a clock is___________.',
        sequence: 7,
        subQuestionsConfig: [
            {
                subQuestion: ' 8. Carbohydrate is stored in the body in form of _________',
                subSequence: 1
            },
            {
                subQuestion: ' 9. ______ is due to gradual accumulation of pesticides from lower animals to higher animals',
                subSequence: 2
            }
        ]
    }
];



export const answersConfig4 = [
    //Ans 1
    {
        ans: 'Evaporation',
        sequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Sublimation',
        sequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Condensation',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Ultraviolet',
        sequence: 1,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Infrared',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Visible Light',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 2
    {
        ans: 'Null Point',
        sequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Curie Point',
        sequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Critical Point',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Iron',
        sequence: 2,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Calcium',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Sodium',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 3
    {
        ans: 'Vitamin K',
        sequence: 3,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Vitamin A',
        sequence: 3,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Vitamin E',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Oxidation',
        sequence: 3,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Hydrogenation',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Reduction',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },

    //Ans 4
    {
        ans: 'Hydrogen',
        sequence: 4,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Oxygen',
        sequence: 4,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Carbon Dioxide',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Surface Tension',
        sequence: 4,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Elasticity',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Specific Gravity',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Apiculture',
        sequence: 4,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Sericulture',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Silviculture',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 5
    {
        ans: '-40',
        sequence: 5,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: '40',
        sequence: 5,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: '-25',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Increase',
        sequence: 5,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Decrease',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Remains Constant',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Rod Shaped',
        sequence: 5,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Comma Shaped',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Spiral Shaped',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 6
    {
        ans: 'Leucoplasts',
        sequence: 6,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Protoplasts',
        sequence: 6,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Chromoplasts',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Luna 2',
        sequence: 6,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Luna 4',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Luna 9',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Eight',
        sequence: 6,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Four',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Six',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 7
    {
        ans: 'Mechanical Energy',
        sequence: 7,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Potential Energy',
        sequence: 7,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Kinetic Energy',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Glycogen',
        sequence: 7,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Glucose',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Starch',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Bioamplification',
        sequence: 7,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Biodegradation',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Bioaccumulation',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
];

