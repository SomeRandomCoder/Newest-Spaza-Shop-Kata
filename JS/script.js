var fs = require('fs');
var handlebars = require('handlebars');

var weeklySales = require('../functions/weeklySales');
var mostPopularProduct = require('../functions/mostPopularProduct');
var leastPopularProduct = require('../functions/leastPopularProduct');
var mostPopularCategory = require('../functions/mostPopularCategory');
var leastPopularCategory = require('../functions/leastPopularCategory');
var mostProfitableProduct = require('../functions/mostProfitableProduct');
var mostProfitableCategory = require("../functions/mostProfitableCategory");

var categories = mostPopularCategory.categoryMap();

//weeklySales
var weeklySales1= weeklySales.week1Sales();
var weeklySales2 = weeklySales.week2Sales();
var weeklySales3 = weeklySales.week3Sales();
var weeklySales4= weeklySales.week4Sales();

//mostPopularProducts
var mpp1 = mostPopularProduct.mostPopularProduct1(weeklySales1);
var mpp2 = mostPopularProduct.mostPopularProduct2(weeklySales2);
var mpp3 = mostPopularProduct.mostPopularProduct3(weeklySales3);
var mpp4 = mostPopularProduct.mostPopularProduct4(weeklySales4);

//leastPopularProducts
var lpp1 = leastPopularProduct.leastPopularProduct1(weeklySales1);
var lpp2 = leastPopularProduct.leastPopularProduct2(weeklySales2);
var lpp3 = leastPopularProduct.leastPopularProduct3(weeklySales3);
var lpp4 = leastPopularProduct.leastPopularProduct4(weeklySales4);

//mostPopularCategory
var mpC1= mostPopularCategory.popularCatergoryWeek1(weeklySales1,categories);
var mpC2= mostPopularCategory.popularCatergoryWeek2(weeklySales2,categories);
var mpC3= mostPopularCategory.popularCatergoryWeek3(weeklySales3,categories);
var mpC4= mostPopularCategory.popularCategoryWeek4(weeklySales4,categories);

//leastPopularCategory
var lpc1 = leastPopularCategory.leastPopularCategoryWeek1(weeklySales1, categories);
var lpc2 = leastPopularCategory.leastPopularCategoryWeek2(weeklySales2, categories);
var lpc3 = leastPopularCategory.leastPopularCategoryWeek3(weeklySales3, categories);
var lpc4 = leastPopularCategory.leastPopularCategoryWeek4(weeklySales4, categories);

//MostProfitableProducts
var mpfp1 = mostProfitableProduct.mostProfitableProduct().week1;
var mpfp2 = mostProfitableProduct.mostProfitableProduct().week2;
var mpfp3 = mostProfitableProduct.mostProfitableProduct().week3;
var mpfp4 = mostProfitableProduct.mostProfitableProduct().week4;

// mostProfitableCategory
var mpfC1 = mostProfitableCategory.mostProfitableCategory().week1;
var mpfC2 = mostProfitableCategory.mostProfitableCategory().week2;
var mpfC3 = mostProfitableCategory.mostProfitableCategory().week3;
var mpfC4 = mostProfitableCategory.mostProfitableCategory().week4;


var source = fs.readFileSync('../views/layouts/homePage.handlebars', "utf8");
var content = {
  title: "Nelisa Spaza Shop",
  mostPopularProducts: "most popular product",
  leastPopularProducts: "least popular product",
  mostPopularCategorys: "most popular category",
  leastPopularCategorys: "least popular category",
  mostProfitableProducts: "most profitable product",
  mostProfitableCategorys: "most profitable category"
};
var template = handlebars.compile(source);
var html = template(content);
fs.writeFileSync("../views/homepage.handlebars", html);


//=======================================================================
var source5= fs.readFileSync("../views/layouts/main.handlebars", "utf8");
var content5={
  title: "Nelisa Spaza Shop",
  mostPopularProducts: "most popular product",
  leastPopularProducts: "least popular product",
  mostPopularCategorys: "most popular category",
  leastPopularCategorys: "least popular category",
  mostProfitableProducts: "most profitable product",
  mostProfitableCategorys: "most profitable category"
};
var template = handlebars.compile(source5);
var html5 = template(content5);
fs.writeFileSync("../views/statistics.handlebars", html5);


//=========================================================================
var source1 = fs.readFileSync('../views/layouts/index.handlebars', "utf8");
var content1 = {
   title: "Week 1 Statistics",
   mostPopularProduct: mpp1,
   leastPopularProduct: lpp1,
   mostPopularCategory: mpC1 ,
  leastPopularCategory: lpc1,
   mostProfitableProduct: mpfp1,
   mostProfitableCategory: mpfC1
   };
var template = handlebars.compile(source1);
var html1 = template(content1);
fs.writeFileSync("../views/week1.handlebars", html1);


//========================================================================
var source2 = fs.readFileSync('../views/layouts/index.handlebars', "utf8");
var content2 = {
   title: "Week 2 Statistics",
   mostPopularProduct: mpp2,
   leastPopularProduct: lpp2,
   mostPopularCategory: mpC2 ,
  leastPopularCategory: lpc2,
   mostProfitableProduct: mpfp2,
   mostProfitableCategory: mpfC2
   };
var template = handlebars.compile(source2);
var html2 = template(content2);
fs.writeFileSync("../views/week2.handlebars", html2);



//=========================================================================
var source3 = fs.readFileSync('../views/layouts/index.handlebars', "utf8");
var content3 = {
   title: "Week 3 Statistics",
   mostPopularProduct: mpp3,
   leastPopularProduct: lpp3,
   mostPopularCategory: mpC3 ,
  leastPopularCategory: lpc3,
   mostProfitableProduct: mpfp3,
   mostProfitableCategory: mpfC3
   };
var template = handlebars.compile(source3);
var html3 = template(content3);
fs.writeFileSync("../views/week3.handlebars", html3);


//======================================================================
var source4 = fs.readFileSync('../views/layouts/index.handlebars', "utf8");
var content4 = {
   title: "Week 4 Statistics",
   mostPopularProduct: mpp4,
   leastPopularProduct: lpp4,
   mostPopularCategory: mpC4 ,
  leastPopularCategory: lpc4,
   mostProfitableProduct: mpfp4,
   mostProfitableCategory: mpfC4
   };
var template = handlebars.compile(source4);
var html4 = template(content4);
fs.writeFileSync("../views/week4.handlebars", html4);
//===========================================================================
