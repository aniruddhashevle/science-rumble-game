export const questionsConfig2 = [
    {
        question: '1.Xylem and Phloem are examples of ________________.',
        sequence: 1,
        subQuestionsConfig: [
            {
                subQuestion: '2. The process of conversion of liquid to vapour at any temperature is __________.',
                subSequence: 1
            },
        ]
    },
    {
        question: '2. The relative atomic mass of Ne is 20. Its relative molecular mass is__________',
        sequence: 2,
        subQuestionsConfig: [
            {
                subQuestion: '3. The value of \'g\' is maximum at ________ and minimum at __________.',
                subSequence: 1
            },
        ]
    },
    {
        question: '3. Power of machine when work done is 30 J in a time interval 5 seconds will be _____.',
        sequence: 3,
        subQuestionsConfig: [
            {
                subQuestion: '4. Crocodiles are classified as ___________.',
                subSequence: 1
            }
        ]
    },
    {
        question: ' 4. Which is the rarest blood group in the world?',
        sequence: 4,
        subQuestionsConfig: [
            {
                subQuestion: ' 5. Jason noticed that the periodic table had coloured sections. The seven elements between the metal and non-metal sections had their own colour. They represent a group called: ',
                subSequence: 1
            },
            {
                subQuestion: ' 6.  The smallest bone is present in which part of body __________.',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 5. Calcium phosphate present in tooth enamel is ______ in nature.',
        sequence: 5,
        subQuestionsConfig: [
            {
                subQuestion: ' 6. The temperature at and above which vapour of a substance cannot be liquified,even with pressure is called as  ___________.',
                subSequence: 1
            },
            {
                subQuestion: ' 7. Another name for Windpipe of the Human Body is ?',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 6. Asteroid belt is found between the orbits of _________ and ________.',
        sequence: 6,
        subQuestionsConfig: [
            {
                subQuestion: ' 7. What part of human ear helps in recognizing sound quality ?',
                subSequence: 1
            },
            {
                subQuestion: ' 8. Hydrochloric Acid is also known as ?',
                subSequence: 2
            }
        ]
    },
    {
        question: ' 7. Atoms with different atomic numbers but same mass number are called ___________.',
        sequence: 7,
        subQuestionsConfig: [
            {
                subQuestion: ' 8. Normal Blood pressure of Human Body is?',
                subSequence: 1
            },
            {
                subQuestion: ' 9. A colloidal solution of \'Liquid in Liquid\' is known as ____________.',
                subSequence: 2
            }
        ]
    }
];



export const answersConfig2 = [
    //Ans 1
    {
        ans: 'Complex Tissue',
        sequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Protective Tissue',
        sequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Epidermal Tissue',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Evaporation',
        sequence: 1,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Boiling',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Sublimation',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 2
    {
        ans: '20',
        sequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: '40',
        sequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: '10',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Poles, Equator',
        sequence: 2,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Equator, Poles',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'South Pole, North Pole',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 3
    {
        ans: '6W',
        sequence: 3,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: '3W',
        sequence: 3,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: '150W',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Reptiles',
        sequence: 3,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Amphibians',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Mammals',
        sequence: 3,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },

    //Ans 4
    {
        ans: 'AB Negative',
        sequence: 4,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'A Negative',
        sequence: 4,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'O Negative',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Metalloids',
        sequence: 4,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Intermediates',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Halogens',
        sequence: 4,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Ear',
        sequence: 4,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Nose',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Toe',
        sequence: 4,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 5
    {
        ans: 'Basic',
        sequence: 5,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Neutral',
        sequence: 5,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Acidic',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Critical Temperature',
        sequence: 5,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Absolute Temperature',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Negative Temperature',
        sequence: 5,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Trachea',
        sequence: 5,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Larynx',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Oesophagus',
        sequence: 5,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 6
    {
        ans: 'Mars, Jupiter',
        sequence: 6,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Earth, Mars',
        sequence: 6,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Jupiter, Uranus',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Cochlea',
        sequence: 6,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'Anvil',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Ear Drum',
        sequence: 6,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Muriatic Acid',
        sequence: 6,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Galic Acid',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Picric Acid',
        sequence: 6,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 7
    {
        ans: 'Isobars',
        sequence: 7,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Isomers',
        sequence: 7,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Isotopes',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: '120/80 mm Hg',
        sequence: 7,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: '80/120 mm Hg',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: '120/100 mm Hg',
        sequence: 7,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'Emulsion',
        sequence: 7,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'Aerosol',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'Solid Solution',
        sequence: 7,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
];

