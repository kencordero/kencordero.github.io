export interface Question {
    question: string,
    correctAnswer: string,
    options: string[],
    result: boolean | undefined
};