var weeklySales = require('./weeklySales');
var fs=require('fs');

var weeklySales1 = weeklySales.week1Sales;
var weeklySales2 = weeklySales.week2Sales;
var weeklySales3 = weeklySales.week3Sales;
var weeklySales4 = weeklySales.week4Sales;

exports.mostPopularProduct1 = function(weeklySales1) {

  weeklySales1.sort(function(a, b) {
    return b.sold - a.sold;
  });
  var MostPopularProduct = weeklySales1[0].stockItem;
  // console.log(MostPopularProduct);
  return MostPopularProduct;
};

exports.mostPopularProduct2 = function(weeklySales2) {

  weeklySales2.sort(function(a, b) {
    return b.sold - a.sold;
  });

  var MostPopularProduct2 = weeklySales2[0].stockItem;
  // console.log(MostPopularProduct2);
  return MostPopularProduct2;
};

exports.mostPopularProduct3 = function(weeklySales3) {
  weeklySales3.sort(function(a, b) {
    return b.sold - a.sold;
  });

  var MostPopularProduct3 = weeklySales3[0].stockItem;
  // console.log(MostPopularProduct3);
  return MostPopularProduct3;
};

exports.mostPopularProduct4 = function(weeklySales4) {
  weeklySales4.sort(function(a, b) {
    return b.sold - a.sold;
  });

  var MostPopularProduct4 = weeklySales4[0].stockItem;
  // console.log(MostPopularProduct4);
  return MostPopularProduct4;
};

// exports.mostPopularProductMap = function(MostPopularProduct1,MostPopularProduct2,MostPopularProduct3,MostPopularProduct4){
//   var map =[];
//   map.push({
//     "week1": MostPopularProduct1
//   });
// };
