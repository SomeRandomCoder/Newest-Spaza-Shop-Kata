var weeklySales = require('./weeklySales');
var fs = require('fs');
var weeklySales1 = weeklySales.week1Sales;
var weeklySales2 = weeklySales.week2Sales;
var weeklySales3 = weeklySales.week3Sales;
var weeklySales4 = weeklySales.week4Sales;

exports.leastPopularProduct1 = function(weeklySales1) {
  weeklySales1.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales1[0].stockItem;
  // console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.leastPopularProduct2 = function(weeklySales2) {
  weeklySales2.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct2 = weeklySales2[0].stockItem;
  // console.log(LeastPopularProduct2);
  return LeastPopularProduct2;
};

exports.leastPopularProduct3 = function(weeklySales3) {
  weeklySales3.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct3 = weeklySales3[0].stockItem;
  // console.log(LeastPopularProduct);
  return LeastPopularProduct3;
};

exports.leastPopularProduct4 = function(weeklySales4) {
  weeklySales4.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct4 = weeklySales4[0].stockItem;
  // console.log(LeastPopularProduct4);
  return LeastPopularProduct4;
};

// exports.leastPopularProducts=function(LeastPopularProduct4, LeastPopularProduct3, LeastPopularProduct2, LeastPopularProduct){
//   var map = {};
//
//   map.push({
//     "week1": LeastPopularProduct,
//     "week2": LeastPopularProduct2,
//     "week3": LeastPopularProduct3,
//     "week4": LeastPopularProduct4
//   });
//
//   return map;
// };
