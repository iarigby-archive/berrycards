export class Card<Q, A> {
  question: Q;
  answer: A;
  question_type;
  mastery: Number;
  constructor(question: Q, answer: A, type) {
    this.question = question;
    this.answer = answer;
    this.question_type = type;
    this.mastery = 0;
  }
}

export class SimpleCard extends Card<string, string> {}

export class CardPractice {
  startTime: Date;
  endTime: Date;
}
