var Grades = function(){
  // schema:
    // row = student
    // col = test
  this.scores = [[89,77,78],[76,82,81],[91,94,89]];
};

Grades.prototype.reportTests = function(){
  for (var student = 0; student < this.scores.length; student++) {
    for (var test = 0; test < this.scores[student].length; test++) {
      console.log('\tStudent: '+student+'\tScore: '+this.scores[student][test]);
    }
  }
};

Grades.prototype.add = function(student, grade){
  // initialize array up to the student #
  if(student >= this.scores.length){
    for (var i = 0; i <= student; i++) {
      this.scores[i] = !!this.scores[i] ? this.scores[i] : [];
    }
  }
  // add new grade
  this.scores[student].push(parseInt(grade));
  
  this.reportTests();
};

Grades.prototype.getAvg = function(student){
  var sum = 0;
  for (var test = 0; test < this.scores[student].length; test++) {
    sum += this.scores[student][test];
  }
  return sum / this.scores[student].length;
};

Grades.prototype.reportAvg = function(student){
  var avg = this.getAvg(student).toFixed(2);
  console.log('\tAvg for Student '+student+': '+avg);
  return avg;
};

Grades.prototype.reset = function(){
  this.scores = [];
};




module.exports = Grades;
