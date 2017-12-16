var mulRegression = require('./multivariateRegression');
var regressor = require('./regression');

var MLAlgorithms = function(){

  return{
    SimpleLinearRegression:regressor.SimpleLinearRegression,
    MultipleLinearRegression: mulRegression.MultipleLinearRegression
  }
}

module.exports = MLAlgorithms();
