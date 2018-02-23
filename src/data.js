export const questionsConfigDemo = [
    {
        question: '1. Q1',
        sequence: 1,
        subQuestionsConfig: [
            {
                subQuestion: '2. Q1A',
                subSequence: 1
            },
        ]
    },
    {
        question: '2. Q2',
        sequence: 2,
        subQuestionsConfig: [
            {
                subQuestion: '3. Q2A',
                subSequence: 1
            },
            {
                subQuestion: '4. Q2B',
                subSequence: 2
            }
        ]
    },
];



export const answersConfigDemo = [
    //Ans 1
    {
        ans: 'A1 - Right',
        sequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'A1 - Wrong',
        sequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'A1 - Wrong Path',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'A1 - Wrong Path - Right',
        sequence: 1,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'A1 - Wrong Path - 1st Wrong',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'A1 - Wrong Path - 2nd Wrong',
        sequence: 1,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },

    //Ans 2
    {
        ans: 'A2 - Right',
        sequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'A2 - Wrong',
        sequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'A2 - Wrong 1st Path',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'A2 - Wrong 1st Path - Right - Wrong 2nd Path',
        sequence: 2,
        subSequence: 1,
        isRightAns: true,
        isDisabled: false,
        isRelatedToSubQues: true,
    },
    {
        ans: 'A2 - Wrong 1st Path - 1st Wrong',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'A2 - Wrong 1st Path - 2nd Wrong',
        sequence: 2,
        subSequence: 1,
        isRightAns: false,
        isDisabled: false,
    },
    {
        ans: 'A2 - Wrong 1st Path - Right - Wrong 2nd Path - Right',
        sequence: 2,
        subSequence: 2,
        isRightAns: true,
        isDisabled: false
    },
    {
        ans: 'A2 - Wrong 1st Path - Right - Wrong 2nd Path - 1st Wrong',
        sequence: 2,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    {
        ans: 'A2 - Wrong 1st Path - Right - Wrong 2nd Path - 2nd Wrong',
        sequence: 2,
        subSequence: 2,
        isRightAns: false,
        isDisabled: false
    },
    
];
