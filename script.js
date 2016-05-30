var fs = require('fs');
var handlebars = require('express-handlebars');
var express = require('express');
var app = express();
var mysql= require('mysql');
var myConnection= require("express-myconnection");
var bodyParser = require('body-parser');

var weeklySales = require('./functions/weeklySales');
var mostPopularProduct = require('./functions/mostPopularProduct');
var leastPopularProduct = require('./functions/leastPopularProduct');
var mostPopularCategory = require('./functions/mostPopularCategory');
var leastPopularCategory = require('./functions/leastPopularCategory');
var mostProfitableProduct = require('./functions/mostProfitableProduct');
var mostProfitableCategory = require("./functions/mostProfitableCategory");

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

var week1={mostPopularProduct: mpp1, leastPopularProduct: lpp1,mostPopularCategory: mpC1, leastPopularCategory: lpc1,mostProfitableProduct: mpfp1, mostProfitableCategory: mpfC1 };
var week2={mostPopularProduct: mpp2, leastPopularProduct: lpp2,mostPopularCategory: mpC2, leastPopularCategory: lpc2,mostProfitableProduct: mpfp2, mostProfitableCategory: mpfC2 };
var week3={mostPopularProduct: mpp3, leastPopularProduct: lpp3,mostPopularCategory: mpC3, leastPopularCategory: lpc3,mostProfitableProduct: mpfp3, mostProfitableCategory: mpfC3 };
var week4={mostPopularProduct: mpp4, leastPopularProduct: lpp4,mostPopularCategory: mpC4, leastPopularCategory: lpc4,mostProfitableProduct: mpfp4, mostProfitableCategory: mpfC4 };

app.get("/homePage",function(req, res){
  res.render("homePage");
});

app.get("/index", function(req, res){
    res.render("index");
  });

app.get("/aboutus", function(req, res){
    res.render("aboutus");
});

  app.get("/week1", function(req, res){
      res.render("week1", week1);
    });

  app.get("/week2", function(req, res){
        res.render("week2", week2);
      });

    app.get("/week3", function(req, res){
            res.render("week3", week3);
          });

          app.get("/week4", function(req, res){
                res.render("week4", week4);
              });


app.use(express.static("public"));
var dbOptions={
  host: "localhost",
  user: 'me',
  password: "secret",
  port: 3000,
};

app.use(myConnection(mysql,dbOptions,"single"));

app.engine("handlebars",handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var server = app.listen(3000, function(){
  var host= server.address().address;
  var port = server.address().port;
  console.log("app listening at http://%s:%s", host,port);

});
