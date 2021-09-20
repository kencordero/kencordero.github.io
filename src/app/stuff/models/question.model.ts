import { Country } from "./country.model";

export interface Question {
    question: string,
    correctAnswer: string,
    options: Country[],
    result: boolean | undefined
};