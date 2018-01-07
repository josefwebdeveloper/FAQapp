import {Injectable} from '@angular/core';
import {Question} from '../models/question';

@Injectable()
export class DataService {
    questions: Question[];

    constructor() {
        // this.questions = [
        //     {
        //         text: 'What is your name?',
        //         answer: 'im Joseph',
        //         hide: true
        //     },
        //     {
        //         text: 'What is your favorite color?',
        //         answer: 'My favorite color is red',
        //         hide: true
        //     },
        //     {
        //         text: 'What is your favorite langage?',
        //         answer: 'My favorite langage is english',
        //         hide: true
        //     }
        // ];
    }

    // Get question from localStorage
    getQuestions() {
        if (localStorage.getItem('questions') === null) {
            this.questions = [];
        } else {
            this.questions = JSON.parse(localStorage.getItem('questions'));

        }
        return this.questions;

    }

    // Add question to localStorage
    addQuestion(question: Question) {
        this.questions.unshift(question);
        // Init
        let questions;
        if (localStorage.getItem('questions') === null) {
            questions = [];
            //    push
            questions.unshift(question);
            //    set array to LS
            localStorage.setItem('questions', JSON.stringify(questions));
        } else {
            questions = JSON.parse(localStorage.getItem('questions'));
            //add new question
            questions.unshift(question);
            //    RESET LS
            localStorage.setItem('questions', JSON.stringify(questions));

        }
    }

    // Remove Question from LocalStorage
    removeQuestion(question: Question) {
        console.log('work');
        for (let i = 0; i < this.questions.length; i++) {
            if (question == this.questions[i]) {
                this.questions.splice(i, 1);
                localStorage.setItem('questions',JSON.stringify(this.questions));
            }
        }
    }
}
