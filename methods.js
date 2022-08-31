const student = {
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

// console.log(student.exam());
// console.log(student.improveExam('algebra'));
console.log(student.treatDey(900, 90));