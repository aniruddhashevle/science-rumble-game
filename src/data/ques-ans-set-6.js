export const questionsConfig6 = [
    {
        question: ' 1.  The energy possessed by a body by virtue of its position is known as _____ energy',
        sequence: 1,
        subQuestionsConfig: [
            {
                subQuestion: ' 2.  Holy basil-commonly known as Tulsi is classified as ?',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 2.  Where is alcohol destroyed in body?',
        sequence: 2,
        subQuestionsConfig: [
            {
                subQuestion: ' 3. Brass is an Alloy of?',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 3.  The ratio of two media is 5:2. Then the ratio of intensities of a given sound wave in the two media is?',
        sequence: 3,
        subQuestionsConfig: [
            {
                subQuestion: ' 4. Any moving object on earth finally comes to rest due to __________',
                subSequence: 1
            }
        ]
    },
    {
        question: ' 4.  The presence of _____ in the atmosphere prevents us from harmful UV rays',
        sequence: 4,
        subQuestionsConfig: [
            {
                subQuestion: ' 5. In onion , Edile part is it\'s___________ ',
                subSequence: 1
            },
            {
                subQuestion: ' 6.  The Human Brain is a lot larger than most other mammalian brains; due to growth of what brain section?',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 5. The cells which provide strength and flexibility to plants are called as ',
        sequence: 5,
        subQuestionsConfig: [
            {
                subQuestion: ' 6. Sound waves is made up of _____ and ______',
                subSequence: 1
            },
            {
                subQuestion: ' 7. Which of the following is an example of prokaryote :  Algae , Bacteria , Fungi',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 6.  Sulphur doesnt react with ____ acid under any conditions',
        sequence: 6,
        subQuestionsConfig: [
            {
                subQuestion: ' 7 . Milk, Cabbage , Tofu , Yogurt are good sources of which mineral',
                subSequence: 1
            },
            {
                subQuestion: ' 8.  Magnetism at the centre of bar magnet is _____________.',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 7. To understand the combining capacity of atoms, we see the ___________.',
        sequence: 7,
        subQuestionsConfig: [
            {
                subQuestion: ' 8. Fat cells are also known as _______________.',
                subSequence: 1
            },
            {
                subQuestion: ' 9.  Which of the following is a hetrogenous mixture : air , Brass, Lime water',
                subSequence: 2
            }
        ]
    }
];



export const answersConfig6 = [
    //Ans 1
    {
        ans: 'Potential Energy',
        sequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Heat Energy',
        sequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Kinetic Energy',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Shrub',
        sequence: 1,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Creeper',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Herb',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 2
    {
        ans: 'Liver',
        sequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Heart',
        sequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Kidney',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Copper and Zinc',
        sequence: 2,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Copper And Tin',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Copper and Gold',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 3
    {
        ans: '5:2',
        sequence: 3,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: '25:4',
        sequence: 3,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: '2:5',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Friction',
        sequence: 3,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Gravity',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Inertia',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },

    //Ans 4
    {
        ans: 'Ozone',
        sequence: 4,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Carbon Dioxide',
        sequence: 4,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Nitrogen',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Root',
        sequence: 4,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Stem',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Flower',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Cerebral Cortex',
        sequence: 4,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Medulla Oblongata',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Cerebellum',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 5
    {
        ans: 'Collenchyma',
        sequence: 5,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Parenchyma',
        sequence: 5,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Aerenchyma',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Compression and Rarefaction',
        sequence: 5,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Compression and Crests',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Troughs and Crests',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Bacteria',
        sequence: 5,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Algae',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Fungi',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 6
    {
        ans: 'HCl',
        sequence: 6,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'H2SO4',
        sequence: 6,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'HNO3',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Calcium',
        sequence: 6,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Sodium',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Potassium',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Zero',
        sequence: 6,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Maximum',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Minimum',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 7
    {
        ans: 'Valency',
        sequence: 7,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Mass',
        sequence: 7,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Atomic Number',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Adipocytes',
        sequence: 7,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Mytocytes',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Leucocytes',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Lime Water',
        sequence: 7,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Brass',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Air',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
];

