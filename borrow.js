const kodomAli = {
   name: 'Kodom Ali',
   money: 5000,
   subjects: ['calculus', 'algebra', 'geometry'],
   exam: function () {
      return this.name + ' ' + 'somethings';
   },

   improveExam: function (subject) {
      this.exam();
      return `${this.name} is giving exam on ${subject}`
   },

   treatDey: function (amount, tips) {
      this.money = this.money - amount - tips;
      return this.money;
   }
}

const badam = {
   name: 'Badam',
   money: 9000,
}

const result2 = kodomAli.exam.call(badam, )