var weeklySales = require("./weeklySales");
var fs = require("fs");

var weeklySales1 = weeklySales.week1Sales();
var weeklySales2 = weeklySales.week2Sales();
var weeklySales3 = weeklySales.week3Sales();
var weeklySales4 = weeklySales.week4Sales();
exports.mostProfitableCategory = function() {

  var purchases = fs.readFileSync('../CSV/purchases.csv', "utf8");
  purchases = purchases.replace("Shop;Date;Item;Quantity;Cost;Total Cost", "").replace(/R/g, "");
  var processingArray = purchases.split('\n').join('.').split(";").join(".").split(".");
  // console.log(processingArray);
  var bought = [];
  for(x=0;x<processingArray.length - 1;x++){ //looping through the purchase list and making a purchase array with the item and cost
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
//=================================================================

  var category = fs.readFileSync('../CSV/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var processingArray2 = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];

  for (y = 0; y < processingArray2.length - 1; y++) { //looping through the list of categories and making a category array with stock item and category
    if (y % 2 === 0) {
      var stockItem = processingArray2[y];
      var categorys = processingArray2[y + 1];
      // console.log(stockItem);
      categories.push({
        "stockItem": stockItem,
        "category": categorys
      });
      // console.log(categories);

    }
  }

  //================================================================

  var week1 = [];
  for (x = 0; x < bought.length; x++) { //loop throught the three arrays and find the item , amount sold and profit made
    for (y = 0; y < weeklySales1.length; y++) {
      for (z = 0; z < categories.length; z++){
      if (weeklySales1[y].stockItem === bought[x].item) {
        var items = bought[x].item;
        var amountsold = weeklySales1[y].sold;
        var costs = parseFloat(bought[x].cost);
        var income = weeklySales1[y].singlePrice;
        var totalincome = income * amountsold;
        var profit = totalincome - costs;

        if (weeklySales1[y].stockItem === categories[z].stockItem){
          var category = categories[z].category;
        week1.push({item: items,
                profit: profit,
                category: category
                });
        }
      }
    }
  }
}
  var mostProfitableCategory = week1.sort(function(a, b) {
    return parseFloat(b.profit) - parseFloat(a.profit);
});

var mPC1 = mostProfitableCategory[0];

//==========================================================================
var week2 = [];
for (x = 0; x < bought.length; x++) {//loop throught the three arrays and find the item , amount sold and profit made
  for (y = 0; y < weeklySales2.length; y++) {
    for (z = 0; z < categories.length; z++){
    if (weeklySales2[y].stockItem === bought[x].item) {
      var items = bought[x].item;
      var amountsold = weeklySales2[y].sold;
      var costs = parseFloat(bought[x].cost);
      var income = weeklySales2[y].singlePrice;
      var totalincome = income * amountsold;
      var profit = totalincome - costs;
      if (weeklySales2[y].stockItem === categories[z].stockItem){
        var category = categories[z].category;
      week2.push({item: items,
              profit: profit,
              category: category
              });
      }
    }
  }
}
}
var mostProfitableCategory2 = week2.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});

var mPC2 = mostProfitableCategory2[0];
//=======================================================

var week3 = [];
for (x = 0; x < bought.length; x++) {//loop throught the three arrays and find the item , amount sold and profit made
  for (y = 0; y < weeklySales3.length; y++) {
    for (z = 0; z < categories.length; z++){
    if (weeklySales3[y].stockItem === bought[x].item) {
      var items = bought[x].item;
      var amountsold = weeklySales3[y].sold;
      var costs = parseFloat(bought[x].cost);
      var income = weeklySales3[y].singlePrice;
      var totalincome = income * amountsold;
      var profit = totalincome - costs;
      if (weeklySales3[y].stockItem === categories[z].stockItem){
        var category = categories[z].category;
      week3.push({item: items,
              profit: profit,
              category: category
              });
      }
    }
  }
}
}
var mostProfitableCategory3 = week3.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});
var mPC3 = mostProfitableCategory3[0];
//===================================================================
var week4 = [];
for (x = 0; x < bought.length; x++) { //loop throught the three arrays and find the item , amount sold and profit made
  for (y = 0; y < weeklySales4.length; y++) {
    for (z = 0; z < categories.length; z++){
    if (weeklySales4[y].stockItem === bought[x].item) {
      var items = bought[x].item;
      var amountsold = weeklySales4[y].sold;
      var costs = parseFloat(bought[x].cost);
      var income = weeklySales4[y].singlePrice;
      var totalincome = income * amountsold;
      var profit = totalincome - costs;
      if (weeklySales4[y].stockItem === categories[z].stockItem){
        var category = categories[z].category;
      week4.push({item: items,
              profit: profit,
              category: category
              });
      }
    }
  }
}
}
var mostProfitableCategory4 = week4.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});
var mPC4 = mostProfitableCategory4[0];
//=========================================================

var mostProfitableCategories = { //return only the category, not the item and profits
  "week1":mPC1.category,
  "week2":mPC2.category,
  "week3":mPC3.category,
  "week4":mPC4.category};

// console.log(mostProfitableCategories);
return mostProfitableCategories;

};
