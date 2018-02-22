export const questionsConfig = [
    {
        question: '1. The fundamental particles present in an atom are electrons and _________',
        sequence: 1,
        subQuestionsConfig: [
            {
                subQuestion: '2. Higher the Frequency, Greater will be ',
                subSequence: 1
            },
        ]
    },
    {
        question: '2. Magnitude of displacement from initial position to final position is the______',
        sequence: 2,
        subQuestionsConfig: [
            {
                subQuestion: '3. An adult consist of 206 bones , so at birth ; how many bones do new born have',
                subSequence: 1
            },
        ]
    },
    {
        question: '3. Tuberculosis affects _________ part of the body',
        sequence: 3,
        subQuestionsConfig: [
            {
                subQuestion: '4. Cathode rays are stream of _______ charged particle.',
                subSequence: 1
            }
        ]
    },
    {
        question: '4. A matchstick head consists of which substance?',
        sequence: 4,
        subQuestionsConfig: [
            {
                subQuestion: '5. The colored part of human eye that controls how much light passes through the pupil is called_________. ',
                subSequence: 1
            },
            {
                subQuestion: '6. Rainbow is formed due to ________ of sunlight by water droplets.',
                subSequence: 2
            }
        ]
    },
    {
        question: '5. Product of mass and velocity is known as_____________',
        sequence: 5,
        subQuestionsConfig: [
            {
                subQuestion: '6. Type of connective tissue present in the ends of bones and joints is___________.',
                subSequence: 1
            },
            {
                subQuestion: '7. Applying pressure and reducing temperature of a gas can lead to____________.',
                subSequence: 2
            }
        ]
    },
    {
        question: '6. The method by which desired characters of 2 plants can be combined is___________.',
        sequence: 6,
        subQuestionsConfig: [
            {
                subQuestion: '7. The speed of sound is maximum in ________and Minimum in ____________.',
                subSequence: 1
            },
            {
                subQuestion: '8. _______ is produced when an acid solution is mixed with basic solution.',
                subSequence: 2
            }
        ]
    },
    {
        question: '7. Instrument used for measurement of Humidity in air?',
        sequence: 7,
        subQuestionsConfig: [
            {
                subQuestion: '8. Calcium hydroxide is also known as?',
                subSequence: 1
            },
            {
                subQuestion: '9. If your entire digestive system is straightened, How long would it be?',
                subSequence: 2
            }
        ]
    }
];



export const answersConfig = [
    //Ans 1
    {
        ans: 'Nucleons',
        sequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Neutrons',
        sequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Protons',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Pitch',
        sequence: 1,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Loudness',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Amplitude',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 2
    {
        ans: 'Straight Line',
        sequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Tangent',
        sequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Total Distance',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: '305',
        sequence: 2,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: '250',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: '206',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 3
    {
        ans: 'Lungs',
        sequence: 3,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Kidney',
        sequence: 3,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Liver',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Negative',
        sequence: 3,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Positive',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Neutral',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },

    //Ans 4
    {
        ans: 'Phosphorous',
        sequence: 4,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Wood',
        sequence: 4,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Carbon',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Iris',
        sequence: 4,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Retina',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Cornea',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Dispersion',
        sequence: 4,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Diffraction',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Scattering',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 5
    {
        ans: 'Momentum',
        sequence: 5,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Impulse',
        sequence: 5,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Kinetic Energy',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Cartilage',
        sequence: 5,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Tendon',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Ligament',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Liquefication',
        sequence: 5,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Evaporation',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Diffusion',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 6
    {
        ans: 'Grafting',
        sequence: 6,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Budding',
        sequence: 6,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Cutting',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Solid ,Gas',
        sequence: 6,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Gas, Solid',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Liquid, Solid',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Water',
        sequence: 6,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Carbondioxide',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Oxygen',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 7
    {
        ans: 'Hygrometer',
        sequence: 7,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Barometer',
        sequence: 7,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Manometer',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Lime water',
        sequence: 7,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Lime salt',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Soda',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: '30 feet ( 9 metre)',
        sequence: 7,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: '10 feet (3 metre)',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: '50Feet (15 metre)',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
];
