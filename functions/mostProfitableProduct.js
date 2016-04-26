var weeklySales = require("./weeklySales");
var fs = require("fs");


var weeklySales1 =weeklySales.week1Sales();
var weeklySales2 = weeklySales.week2Sales();
var weeklySales3 = weeklySales.week3Sales();
var weeklySales4 = weeklySales.week4Sales();

exports.mostProfitableProduct = function() {

  var purchases = fs.readFileSync('../CSV/purchases.csv', "utf8");

  purchases = purchases.replace("Shop;Date;Item;Quantity;Cost;Total Cost", "").replace(/R/g, "");
  var processingArray = purchases.split('\n').join('.').split(";").join(".").split(".");
  // console.log(processingArray);
  var bought = [];

  for(x=0;x<processingArray.length - 1;x++){
    if(x % 6 === 0){
      var item = processingArray[x - 3];
      var cost = processingArray[x];
      // console.log(processingArray[x]);
    bought.push({
      item: item,
      cost: cost
    });
  }
  }
  // console.log(bought);

//=======================================================================
  var week1 = [];
  for (x = 0; x < bought.length; x++) {
    for (y = 0; y < weeklySales1.length; y++) {
      if (weeklySales1[y].stockItem === bought[x].item) {
        var items = bought[x].item;
        var amountsold = weeklySales1[y].sold;
        var costs = parseFloat(bought[x].cost);
        var income = weeklySales1[y].singlePrice;
        var totalincome = income * amountsold;
        var profit = totalincome - costs;
        week1.push({item: items,
                profit: profit
                });
      }
    }
  }

  var mostProfitableProduct1 = week1.sort(function(a, b) {
    return parseFloat(b.profit) - parseFloat(a.profit);
});

var MostProfitableProduct1 = mostProfitableProduct1[0].item;
// console.log(MostProfitableProduct1);
// return MostProfitableProduct1;
//=======================================================================

var week2 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales2.length; y++) {
    // console.log(bought[x].item);
    if (weeklySales2[y].stockItem === bought[x].item) {
      // console.log(weeklySales2[y].stockItem2);
      var items2 = bought[x].item;
      var amountsold2 = weeklySales2[y].sold;
      var costs2 = parseFloat(bought[x].cost);
      var income2 = weeklySales2[y].singlePrice;
      var totalincome2 = income2 * amountsold2;
      var profit2 = totalincome2 - costs2;
      week2.push({item: items2,
              profit: profit2
              });
    }
  }
}
var mostProfitableProduct2 = week2.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});

var MostProfitableProduct2 = mostProfitableProduct2[0].item;
//===========================================================================
var week3 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales3.length; y++) {
    if (weeklySales3[y].stockItem === bought[x].item) {
      var items3 = bought[x].item;
      var amountsold3 = weeklySales3[y].sold;
      var costs3 = parseFloat(bought[x].cost);
      var income3 = weeklySales3[y].singlePrice;
      var totalincome3 = income3 * amountsold3;
      var profit3 = totalincome3 - costs3;
      week3.push({item: items3,
              profit: profit3
              });
    }
  }
}
var mostProfitableProduct3 = week3.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});
var MostProfitableProduct3 = mostProfitableProduct3[0].item;
//===========================================================================

var week4 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales4.length; y++) {
    if (weeklySales4[y].stockItem === bought[x].item) {
      var items4 = bought[x].item;
      var amountsold4 = weeklySales4[y].sold;
      var costs4 = parseFloat(bought[x].cost);
      var income4 = weeklySales4[y].singlePrice;
      var totalincome4 = income4 * amountsold4;
      var profit4 = totalincome4 - costs4;
      week4.push({item: items4,
              profit: profit4
              });
    }
  }
}
var mostProfitableProduct4 = week4.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);
});

var MostProfitableProduct4 = mostProfitableProduct4[0].item;

//=================================================================================


var mostProfitableProduct = {
  "week1":MostProfitableProduct1,
  "week2":MostProfitableProduct2,
  "week3":MostProfitableProduct3,
  "week4":MostProfitableProduct4};

// console.log(mostProfitableProduct);
return mostProfitableProduct;

};
