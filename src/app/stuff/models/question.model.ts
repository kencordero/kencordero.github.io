import { Country } from "./country.model";

export interface Question {
    question: string,
    correctAnswer: string,
    options: string[],
    result: boolean | undefined
};