export const questionsConfig5 = [
    {
        question: ' 1. Which part of Brain is also known as Brainstem?',
        sequence: 1,
        subQuestionsConfig: [
            {
                subQuestion: ' 2. What is the normal Temperature of human being at Kelvin Scale ? ',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 2. When we put acetone on our hand, it feels cold because acetone ______________.',
        sequence: 2,
        subQuestionsConfig: [
            {
                subQuestion: ' 3. When a detergent is added to pure water , it\'s surface tension _________.',
                subSequence: 1
            },
        ]
    },
    {
        question: ' 3. One can be recognised by his voice due to the uniqueness of  ____________',
        sequence: 3,
        subQuestionsConfig: [
            {
                subQuestion: ' 4. Dengue is caused by which type of Mosquito?',
                subSequence: 1
            }
        ]
    },
    {
        question: ' 4. What organelle is known as suicide bags?',
        sequence: 4,
        subQuestionsConfig: [
            {
                subQuestion: ' 5. High concentration of phosphate nutrients in water leads to ______________. ',
                subSequence: 1
            },
            {
                subQuestion: ' 6. Intensity of Earthquake is measured using____________.',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 5. The property of a metal to be drawn into wires is called_________.',
        sequence: 5,
        subQuestionsConfig: [
            {
                subQuestion: ' 6.  Lining of Kidney Tubules is made up of ___________ Tissue',
                subSequence: 1
            },
            {
                subQuestion: ' 7.  The star seems twinkling in the sky due to which property of light?',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 6. Most abundant metal present in the human body is_____________',
        sequence: 6,
        subQuestionsConfig: [
            {
                subQuestion: ' 7. Which isotope of Uranium is used as fuel in Nuclear Reactor ?',
                subSequence: 1
            },
            {
                subQuestion: ' 8.  The sound produced by the bat is ______________',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 7. Osteoporosis disease is associated to___________ of human body.',
        sequence: 7,
        subQuestionsConfig: [
            {
                subQuestion: ' 8. The "Echo "  is due to which property of sound?',
                subSequence: 1
            },
            {
                subQuestion: ' 9. Which of the following Liquid is most viscous : Oil , Milk , Petrol ',
                subSequence: 2
            }
        ]
    }
];



export const answersConfig5 = [
    //Ans 1
    {
        ans: 'Medulla Oblongata',
        sequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Cerebrum',
        sequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Cerebellum',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: '310',
        sequence: 1,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: '270',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: '340',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 2
    {
        ans: 'Evaporates',
        sequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Freezes',
        sequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Melts',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Decreases',
        sequence: 2,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Increases',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Remains Constant',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 3
    {
        ans: 'Quality',
        sequence: 3,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Amplitude',
        sequence: 3,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Pitch',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Aedes',
        sequence: 3,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Culex',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Anopheles',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },

    //Ans 4
    {
        ans: 'Lysosome',
        sequence: 4,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Chromosome',
        sequence: 4,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Ribosome',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Eutrophication',
        sequence: 4,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Land Slide',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Soil Erosion',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Seismograph',
        sequence: 4,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Polygraph',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Barometer',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 5
    {
        ans: 'Ductility',
        sequence: 5,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Lustre',
        sequence: 5,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Malleability',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Cuboidal Epithelium',
        sequence: 5,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Squamous Epithelium',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Columnar Epithelium',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Refraction',
        sequence: 5,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Diffraction',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Polarisation',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 6
    {
        ans: 'Calcium',
        sequence: 6,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Iron',
        sequence: 6,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Sodium',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'U-235',
        sequence: 6,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'U-238',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'U-236',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Ultrasonic',
        sequence: 6,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Audible',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Infrasonic',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 7
    {
        ans: 'Bones',
        sequence: 7,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Stomach',
        sequence: 7,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Blood',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Reflection',
        sequence: 7,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Interference',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Dispersion',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Oil',
        sequence: 7,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Petrol',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Milk',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
];

