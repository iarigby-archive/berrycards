export class Card<Q, A> {
  question: Q;
  answer: A;
  mastery;
  constructor(question: Q, answer: A) {
    this.question = question;
    this.answer = answer;
  }
}

export class SimpleCard extends Card<string, string> {}

export class CardPractice {
  startTime: Date;
  endTime: Date;
}
