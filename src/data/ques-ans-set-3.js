export const questionsConfig3 = [
    {
        question: ' 1. The back and forth motion of an object is called _________',
        sequence: 1,
        subQuestionsConfig: [
            {
                subQuestion: ' 2. Milk sugar is called as ? ',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 2. Nephrology is a study of____________',
        sequence: 2,
        subQuestionsConfig: [
            {
                subQuestion: ' 3. Which gas is also known as Laughing Gas ',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 3.  Speed of sound does not depend on',
        sequence: 3,
        subQuestionsConfig: [
            {
                subQuestion: ' 4. Human Blood is viscous due to the presence of __________',
                subSequence: 1
            }
        ]
    },
    {
        question: ' 4. Phenolphthalein gives _____ colour with lime water',
        sequence: 4,
        subQuestionsConfig: [
            {
                subQuestion: ' 5. Term used for " Study of plants " is',
                subSequence: 1
            },
            {
                subQuestion: ' 6. Doppler\'s Effect is related to change in _________ of sound ?',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 5. In desert plants, most of the photosynthesis takes place by_______. ',
        sequence: 5,
        subQuestionsConfig: [
            {
                subQuestion: ' 6. Which of the following is Cleaner Fuel :  Petrol , Diesel , CNG',
                subSequence: 1
            },
            {
                subQuestion: ' 7. Which of the following has the maximum wavelength : Radiowaves , x rays , Gamma rays',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 6.  Tarnishing of silver ornaments in atmosphere is due to the formation of Ag2O and____________',
        sequence: 6,
        subQuestionsConfig: [
            {
                subQuestion: ' 7. Find the odd man out ( Polio ,Chicken Pox , Leprosy )',
                subSequence: 1
            },
            {
                subQuestion: '8. Rate of diffusion is fastest in : Solids , Liquids , Gases',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 7. Consumption of citrus food prevents which disease : Rickets , Scurvy , Beri Beri',
        sequence: 7,
        subQuestionsConfig: [
            {
                subQuestion: ' 8. The bleaching property of bleaching powder is due to presence of ______ion',
                subSequence: 1
            },
            {
                subQuestion: ' 9. When the lift is moving down , the weight of the person standing in it would__________.',
                subSequence: 2
            }
        ]
    }
];



export const answersConfig3 = [
    //Ans 1
    {
        ans: 'Vibrations',
        sequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Linear Motion',
        sequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Rotation',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Lactose',
        sequence: 1,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Sucrose',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Fructose',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 2
    {
        ans: 'Kidney',
        sequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Brain',
        sequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Lungs',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Nitrous Oxide',
        sequence: 2,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Sulphur Dioxide',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Nitric Oxide',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 3
    {
        ans: 'Pressure',
        sequence: 3,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Temperature',
        sequence: 3,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Medium',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Plasma Proteins',
        sequence: 3,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Platelets',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'RBC and WBC',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },

    //Ans 4
    {
        ans: 'Pink',
        sequence: 4,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Green',
        sequence: 4,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Blue',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Botany',
        sequence: 4,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Eugenics',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Palynology',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Frequency',
        sequence: 4,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Amplitude',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Intensity',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 5
    {
        ans: 'Stem',
        sequence: 5,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Roots',
        sequence: 5,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Spines',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'CNG',
        sequence: 5,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Petrol',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Diesel',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Radio Waves',
        sequence: 5,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'X Rays',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Gamma Rays',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 6
    {
        ans: 'Ag2S',
        sequence: 6,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'AgSO3',
        sequence: 6,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'AgSO2',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Leprosy',
        sequence: 6,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Chicken Pox',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Polio',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Gases',
        sequence: 6,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Solids',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Liquids',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 7
    {
        ans: 'Scurvy',
        sequence: 7,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Beri-Beri',
        sequence: 7,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Rickets',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Chlorine',
        sequence: 7,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Oxygen',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Calcium',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Decreases',
        sequence: 7,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Increases',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Remains Same',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
];

