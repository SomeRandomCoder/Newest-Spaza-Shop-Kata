var weeklySales = require("./weeklySales");
var fs = require("fs");


// var weeklySale = weeklySales.weeklySales();
var weeklySales1 = weeklySales.week1Sales;
var weeklySales2 = weeklySales.week2Sales;
var weeklySales3 = weeklySales.week3Sales;
var weeklySales4 = weeklySales.week4Sales;

exports.leastPopularCategoryWeek1 = function(weeklySales1, categories){
    var leastPopularCategoryWeek1 =[];

    for (var i =0; i <weeklySales1.length; i++){
      for(var x =0; x< categories.length; x++){
        if(weeklySales1[i].stockItem === categories[x].stockItem){
          var cat = categories[x].category;
          var amountSold = weeklySales1[i].sold;

          leastPopularCategoryWeek1.push({
            category: cat,
            AmountSold: amountSold
          });
        }
      }
    }
    // return leastPopularCategoryWeek1[0].category;

    leastPopularCategoryWeek1.sort(function(a,b){
      return a.AmountSold - b.AmountSold;
    });
    var LeastPopularCategoryWeek1 = leastPopularCategoryWeek1[0].category;
    // console.log(LeastPopularCategoryWeek1);
    return LeastPopularCategoryWeek1;
};

exports.leastPopularCategoryWeek2 = function(weeklySales2, categories){
    var leastPopularCategoryWeek2=[];

      for(var i=0; i <weeklySales2.length; i++){
        for (var x=0; x< categories.length; x++){
          if(weeklySales2[i].stockItem === categories[x].stockItem){
            var cat = categories[x].category;
            var amountSold = weeklySales2[i].sold;

            leastPopularCategoryWeek2.push({
              category: cat,
              AmountSold: amountSold
            });
          }
        }
      }
      // console.log(leastPopularCategoryWeek2);
      // return leastPopularCategoryWeek2;


          leastPopularCategoryWeek2.sort(function(a,b){
            return a.AmountSold - b.AmountSold;
          });
          var LeastPopularCategoryWeek2 = leastPopularCategoryWeek2[0].category;
          // console.log(LeastPopularCategoryWeek2);
          return LeastPopularCategoryWeek2;

};

exports.leastPopularCategoryWeek3=function(weeklySales3, categories){
  var leastPopularCategoryWeek3=[];

  for(var i=0; i< weeklySales3.length; i++){
    for(var x=0; x<categories.length;x++){
      if(weeklySales3[i].stockItem === categories[x].stockItem){
        var cat = categories[x].category;
        var amountSold =weeklySales3[i].sold;
        leastPopularCategoryWeek3.push({
          category: cat,
          SoldAmount: amountSold
        });
      }
    }
  }
  // console.log(leastPopularCategoryWeek3);
  // return leastPopularCategoryWeek3;
  leastPopularCategoryWeek3.sort(function(a,b){
    return a.AmountSold - b.AmountSold;
  });
  var LeastPopularCategoryWeek3 = leastPopularCategoryWeek3[0].category;
  // console.log(LeastPopularCategoryWeek2);
  return LeastPopularCategoryWeek3;
};

exports.leastPopularCategoryWeek4=function(weeklySales4, categories){
  var leastPopularCategoryWeek4=[];

  for(var i=0; i< weeklySales4.length; i++){
    for(var x=0; x<categories.length;x++){
      if(weeklySales4[i].stockItem === categories[x].stockItem){
        var cat = categories[x].category;
        var amountSold =weeklySales4[i].sold;
        leastPopularCategoryWeek4.push({
          category: cat,
          SoldAmount: amountSold
        });
      }
    }
  }
  // console.log(leastPopularCategoryWeek4);
  // return leastPopularCategoryWeek4;
  leastPopularCategoryWeek4.sort(function(a,b){
    return a.AmountSold - b.AmountSold;
  });
  var LeastPopularCategoryWeek4 = leastPopularCategoryWeek4[0].category;
  // console.log(LeastPopularCategoryWeek2);
  return LeastPopularCategoryWeek4;
};
