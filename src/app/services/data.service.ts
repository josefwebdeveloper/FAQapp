import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
      this.questions = [
          {
              text: 'What is your name?',
              answer: 'im Joseph',
              hide: true
          },
          {
              text: 'What is your favorite color?',
              answer: 'My favorite color is red',
              hide: true
          },
          {
              text: 'What is your favorite langage?',
              answer: 'My favorite langage is english',
              hide: true
          }
      ];
  }
  getQuestions() {
    return this.questions;
}

}
