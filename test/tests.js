var assert = require('assert');
var weeklySales = require('../functions/weeklySales');
var mostPopularProduct = require('../functions/mostPopularProduct');
var leastPopularProduct = require('../functions/leastPopularProduct');
var mostPopularCategory = require('../functions/mostPopularCategory');
var leastPopularCategory = require('../functions/leastPopularCategory');
var mostProfitableProduct = require('../functions/mostProfitableProduct');
var mostProfitableCategory = require("../functions/mostProfitableCategory");

 describe("week1Sales", function(){
  it("should return a list of week1 products, quantity of each product sold and single price per item .", function(){
    var result = weeklySales.week1Sales();
    assert.deepEqual(result,
      [ { stockItem: 'Apples - loose', sold: 36, singlePrice: 2 },
    { stockItem: 'Bananas - loose', sold: 47, singlePrice: 2 },
    { stockItem: 'Bread', sold: 45, singlePrice: 12 },
    { stockItem: 'Chakalaka Can', sold: 23, singlePrice: 10 },
    { stockItem: 'Coke 500ml', sold: 54, singlePrice: 6.5 },
    { stockItem: 'Cream Soda 500ml', sold: 22, singlePrice: 7.5 },
    { stockItem: 'Fanta 500ml', sold: 33, singlePrice: 6.5 },
    { stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 17,
      singlePrice: 9 },
    { stockItem: 'Imasi', sold: 30, singlePrice: 25 },
    { stockItem: 'Iwisa Pap 5kg', sold: 17, singlePrice: 30 },
    { stockItem: 'Milk 1l', sold: 39, singlePrice: 10 },
    { stockItem: 'Mixed Sweets 5s', sold: 49, singlePrice: 3 },
    { stockItem: 'Shampoo 1 litre', sold: 3, singlePrice: 30 },
    { stockItem: 'Soap Bar', sold: 12, singlePrice: 6 },
    { stockItem: 'Top Class Soy Mince', sold: 22, singlePrice: 12 } ]
);
  });

});

describe("week2Sales",function(){
  it("should return a list of week2 products, quantity of each product sold and single price per item", function(){
    var result = weeklySales.week2Sales('./Spaza-Shop-Kata/week2.csv');
    assert.deepEqual(result,
      [ { stockItem: 'Apples - loose', sold: 0, singlePrice: 2 },
  { stockItem: 'Bananas - loose', sold: 14, singlePrice: 2 },
  { stockItem: 'Bread', sold: 14, singlePrice: 12 },
  { stockItem: 'Chakalaka Can', sold: 0, singlePrice: 10 },
  { stockItem: 'Coke 500ml', sold: 98, singlePrice: 6.5 },
  { stockItem: 'Cream Soda 500ml', sold: 7, singlePrice: 7.5 },
  { stockItem: 'Fanta 500ml', sold: 0, singlePrice: 6.5 },
  { stockItem: 'Gold Dish Vegetable Curry Can',
    sold: 0,
    singlePrice: 9 },
  { stockItem: 'Heart Chocolates', sold: 0, singlePrice: 35 },
  { stockItem: 'Imasi', sold: 28, singlePrice: 25 },
  { stockItem: 'Iwisa Pap 5kg', sold: 7, singlePrice: 30 },
  { stockItem: 'Milk 1l', sold: 21, singlePrice: 10 },
  { stockItem: 'Mixed Sweets 5s', sold: 21, singlePrice: 3 },
  { stockItem: 'Shampoo 1 litre', sold: 0, singlePrice: 30 },
  { stockItem: 'Soap Bar', sold: 0, singlePrice: 6 },
  { stockItem: 'Top Class Soy Mince', sold: 14, singlePrice: 12 },
  { stockItem: 'Valentine Cards', sold: 42, singlePrice: 4 } ]

    );
  });
});

describe("week3Sales", function(){

  it("should return a list of week3 products, quantity of each product sold and single price per item", function(){
    var result = weeklySales.week3Sales('./Spaza-Shop-Kata/week3.csv');
    assert.deepEqual(result,

      [ { stockItem: 'Apples - loose', sold: 25, singlePrice: 2 },
        { stockItem: 'Bananas - loose', sold: 17, singlePrice: 2 },
        { stockItem: 'Bread', sold: 24, singlePrice: 12 },
        { stockItem: 'Chakalaka Can', sold: 17, singlePrice: 10 },
        { stockItem: 'Coke 500ml', sold: 18, singlePrice: 6.5 },
        { stockItem: 'Cream Soda 500ml', sold: 12, singlePrice: 7.5 },
        { stockItem: 'Fanta 500ml', sold: 14, singlePrice: 6.5 },
        { stockItem: 'Gold Dish Vegetable Curry Can',
          sold: 8,
          singlePrice: 9 },
        { stockItem: 'Imasi', sold: 25, singlePrice: 25 },
        { stockItem: 'Iwisa Pap 5kg', sold: 4, singlePrice: 30 },
        { stockItem: 'Milk 1l', sold: 30, singlePrice: 10 },
        { stockItem: 'Mixed Sweets 5s', sold: 29, singlePrice: 2 },
        { stockItem: 'Shampoo 1 litre', sold: 4, singlePrice: 30 },
        { stockItem: 'Soap Bar', sold: 8, singlePrice: 6 },
        { stockItem: 'Top Class Soy Mince', sold: 12, singlePrice: 12 } ]

    );
  });
});

describe("week4Sales", function(){

  it("should return a list of week4 products, quantity of each product sold and single price per item", function(){
    var result = weeklySales.week4Sales('./Spaza-Shop-Kata/week4.csv');
    assert.deepEqual(result,
      [ { stockItem: 'Apples - loose', sold: 7, singlePrice: 2 },
    { stockItem: 'Apples - loose', sold: 56, singlePrice: 2 },
    { stockItem: 'Bananas - loose', sold: 35, singlePrice: 2 },
    { stockItem: 'Bread', sold: 35, singlePrice: 12 },
    { stockItem: 'Chakalaka Can', sold: 21, singlePrice: 10 },
    { stockItem: 'Coke 500ml', sold: 21, singlePrice: 6.5 },
    { stockItem: 'Cream Soda 500ml', sold: 0, singlePrice: 7.5 },
    { stockItem: 'Fanta 500ml', sold: 7, singlePrice: 6.5 },
    { stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 7,
      singlePrice: 9 },
    { stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 63,
      singlePrice: 9 },
    { stockItem: 'Imasi', sold: 42, singlePrice: 25 },
    { stockItem: 'Iwisa Pap 5kg', sold: 21, singlePrice: 30 },
    { stockItem: 'Milk 1l', sold: 56, singlePrice: 10 },
    { stockItem: 'Mixed Sweets 5s', sold: 21, singlePrice: 3 },
    { stockItem: 'Shampoo 1 litre', sold: 0, singlePrice: 30 },
    { stockItem: 'Soap Bar', sold: 7, singlePrice: 6 },
    { stockItem: 'Top Class Soy Mince', sold: 0, singlePrice: 12 },
    { stockItem: 'Top Class Soy Mince', sold: 63, singlePrice: 12 } ]

     );
  });
});

describe("mostPopularProduct1",function(){
  it("should return the most popular product sold in week 1", function(){
    var result = mostPopularProduct.mostPopularProduct1(
      [ { stockItem: 'Apples - loose', sold: 36 },
        { stockItem: 'Bananas - loose', sold: 47 },
        { stockItem: 'Bread', sold: 45 },
        { stockItem: 'Chakalaka Can', sold: 23 },
        { stockItem: 'Coke 500ml', sold: 54 },
        { stockItem: 'Cream Soda 500ml', sold: 22 },
        { stockItem: 'Fanta 500ml', sold: 33 },
        { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17 },
        { stockItem: 'Imasi', sold: 30 },
        { stockItem: 'Iwisa Pap 5kg', sold: 17 },
        { stockItem: 'Milk 1l', sold: 39 },
        { stockItem: 'Mixed Sweets 5s', sold: 49 },
        { stockItem: 'Shampoo 1 litre', sold: 3 },
        { stockItem: 'Soap Bar', sold: 12 },
        { stockItem: 'Top Class Soy Mince', sold: 22 } ]

    );
    assert.deepEqual(result, { stockItem: 'Coke 500ml', sold: 54 }
);
  });
});

describe("mostPopularProduct2",function(){
  it("should return the most popular product sold in week 2", function(){
    var result = mostPopularProduct.mostPopularProduct2(
      [ { stockItem: 'Apples - loose', sold: 0 },
  { stockItem: 'Bananas - loose', sold: 14 },
  { stockItem: 'Bread', sold: 14 },
  { stockItem: 'Chakalaka Can', sold: 0 },
  { stockItem: 'Coke 500ml', sold: 98 },
  { stockItem: 'Cream Soda 500ml', sold: 7 },
  { stockItem: 'Fanta 500ml', sold: 0 },
  { stockItem: 'Gold Dish Vegetable Curry Can', sold: 0 },
  { stockItem: 'Heart Chocolates', sold: 0 },
  { stockItem: 'Imasi', sold: 28 },
  { stockItem: 'Iwisa Pap 5kg', sold: 7 },
  { stockItem: 'Milk 1l', sold: 21 },
  { stockItem: 'Mixed Sweets 5s', sold: 21 },
  { stockItem: 'Rose (plastic)', sold: 14 },
  { stockItem: 'Shampoo 1 litre', sold: 7 },
  { stockItem: 'Soap Bar', sold: 7 },
  { stockItem: 'Top Class Soy Mince', sold: 21 } ]

    );
    assert.deepEqual(result, { stockItem: 'Coke 500ml', sold: 98 }

);
  });
});

describe("mostPopularProduct3",function(){
  it("should return the most popular product sold in week 3", function(){
    var result = mostPopularProduct.mostPopularProduct3(
      [ { stockItem: 'Apples - loose', sold: 25 },
        { stockItem: 'Bananas - loose', sold: 17 },
        { stockItem: 'Bread', sold: 24 },
        { stockItem: 'Chakalaka Can', sold: 17 },
        { stockItem: 'Coke 500ml', sold: 18 },
        { stockItem: 'Cream Soda 500ml', sold: 12 },
        { stockItem: 'Fanta 500ml', sold: 14 },
        { stockItem: 'Gold Dish Vegetable Curry Can', sold: 8 },
        { stockItem: 'Imasi', sold: 25 },
        { stockItem: 'Iwisa Pap 5kg', sold: 4 },
        { stockItem: 'Milk 1l', sold: 30 },
        { stockItem: 'Mixed Sweets 5s', sold: 29 },
        { stockItem: 'Shampoo 1 litre', sold: 4 },
        { stockItem: 'Soap Bar', sold: 8 },
        { stockItem: 'Top Class Soy Mince', sold: 12 } ]

    );
    assert.deepEqual(result,{ stockItem: 'Milk 1l', sold: 30 }

);
  });
});

describe("mostPopularProduct4",function(){
  it("should return the most popular product sold in week 4", function(){
    var result = mostPopularProduct.mostPopularProduct4(
      [ { stockItem: 'Apples - loose', sold: 7 },
  { stockItem: 'Apples - loose', sold: 56 },
  { stockItem: 'Bananas - loose', sold: 35 },
  { stockItem: 'Bread', sold: 35 },
  { stockItem: 'Chakalaka Can', sold: 21 },
  { stockItem: 'Coke 500ml', sold: 21 },
  { stockItem: 'Cream Soda 500ml', sold: 0 },
  { stockItem: 'Fanta 500ml', sold: 7 },
  { stockItem: 'Gold Dish Vegetable Curry Can', sold: 7 },
  { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 },
  { stockItem: 'Imasi', sold: 42 },
  { stockItem: 'Iwisa Pap 5kg', sold: 21 },
  { stockItem: 'Milk 1l', sold: 56 },
  { stockItem: 'Mixed Sweets 5s', sold: 21 },
  { stockItem: 'Shampoo 1 litre', sold: 0 },
  { stockItem: 'Soap Bar', sold: 7 },
  { stockItem: 'Top Class Soy Mince', sold: 0 },
  { stockItem: 'Top Class Soy Mince', sold: 63 } ]

    );
    assert.deepEqual(result, { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 }


);
  });
});

describe("leastPopularProduct",function(){
  it("should return the least popular product of each week",function(){
    var result = leastPopularProduct.leastPopularProducts();
    assert.deepEqual(result,{
      "week1":"Shampoo 1 litre",
    "week2":"Heart Chocolates",
    "week3":"Shampoo 1 litre",
    "week4":"Top Class Soy Mince"
  });
  });
});

// describe("mostPopularProduct",function(){
//   it("should return the most popular product of each week",function(){
//     var result = mostPopularProduct.mostPopularProduct();
//     assert.deepEqual(result,{"week1":"Coke 500ml","week2":"Coke 500ml","week3":"Milk 1l","week4":"Gold Dish Vegetable Curry Can"});
//   });
// });

describe("popularCatergoryWeek1",function(){
  it("should return the most popular catergory for week 1", function(){
    var result=mostPopularCategory.popularCatergoryWeek1(

[{ stockItem: 'Coke 500ml', sold: 54 }],

[ { stockItem: 'Bananas - loose', category: 'Fruit' },
  { stockItem: 'Imasi', category: 'Dairy' },
  { stockItem: 'Bread', category: 'Baked_Goods' },
  { stockItem: 'Chakalaka Can', category: 'Canned_Goods' },
  { stockItem: 'Coke 500ml', category: 'Cooldrink' },
  { stockItem: 'Cream Soda 500ml', category: 'Cooldrink' },
  { stockItem: 'Fanta 500ml', category: 'Cooldrink' },
  { stockItem: 'Gold Dish Vegetable Curry Can',category: 'Canned_Goods' },
  { stockItem: 'Iwisa Pap 5kg', category: 'Cereal' },
  { stockItem: 'Milk 1l', category: 'Dairy' },
  { stockItem: 'Mixed Sweets 5s', category: 'Sweets' },
  { stockItem: 'Shampoo 1 litre', category: 'Hygiene' },
  { stockItem: 'Soap Bar', category: 'Hygiene' },
  { stockItem: 'Top Class Soy Mince', category: 'Meat' },
  { stockItem: 'Heart Chocolates', category: 'Sweets' },
  { stockItem: 'Rose (plastic)', category: 'Other' } ]
    );
    assert.deepEqual(result, [{"category":"Cooldrink","AmountSold":54}]);
  });
});

describe("popularCatergoryWeek2",function(){
  it("should return the most popular category for week 2",function(){
    var result = mostPopularCategory.popularCatergoryWeek2(
      [{ stockItem: 'Coke 500ml', sold: 98 }],

      [ { stockItem: 'Bananas - loose', category: 'Fruit' },
        { stockItem: 'Imasi', category: 'Dairy' },
        { stockItem: 'Bread', category: 'Baked_Goods' },
        { stockItem: 'Chakalaka Can', category: 'Canned_Goods' },
        { stockItem: 'Coke 500ml', category: 'Cooldrink' },
        { stockItem: 'Cream Soda 500ml', category: 'Cooldrink' },
        { stockItem: 'Fanta 500ml', category: 'Cooldrink' },
        { stockItem: 'Gold Dish Vegetable Curry Can',category: 'Canned_Goods' },
        { stockItem: 'Iwisa Pap 5kg', category: 'Cereal' },
        { stockItem: 'Milk 1l', category: 'Dairy' },
        { stockItem: 'Mixed Sweets 5s', category: 'Sweets' },
        { stockItem: 'Shampoo 1 litre', category: 'Hygiene' },
        { stockItem: 'Soap Bar', category: 'Hygiene' },
        { stockItem: 'Top Class Soy Mince', category: 'Meat' },
        { stockItem: 'Heart Chocolates', category: 'Sweets' },
        { stockItem: 'Rose (plastic)', category: 'Other' } ]



    );
    assert.deepEqual(result, [ { category: 'Cooldrink', AmountSold: 98 } ]
);
  });
});

describe("popularCatergoryWeek3",function(){
  it("should return the most popular category for week 3", function(){
      var result = mostPopularCategory.popularCatergoryWeek3(
        [{ stockItem: 'Milk 1l', sold: 30 }],

        [ { stockItem: 'Bananas - loose', category: 'Fruit' },
          { stockItem: 'Imasi', category: 'Dairy' },
          { stockItem: 'Bread', category: 'Baked_Goods' },
          { stockItem: 'Chakalaka Can', category: 'Canned_Goods' },
          { stockItem: 'Coke 500ml', category: 'Cooldrink' },
          { stockItem: 'Cream Soda 500ml', category: 'Cooldrink' },
          { stockItem: 'Fanta 500ml', category: 'Cooldrink' },
          { stockItem: 'Gold Dish Vegetable Curry Can',category: 'Canned_Goods' },
          { stockItem: 'Iwisa Pap 5kg', category: 'Cereal' },
          { stockItem: 'Milk 1l', category: 'Dairy' },
          { stockItem: 'Mixed Sweets 5s', category: 'Sweets' },
          { stockItem: 'Shampoo 1 litre', category: 'Hygiene' },
          { stockItem: 'Soap Bar', category: 'Hygiene' },
          { stockItem: 'Top Class Soy Mince', category: 'Meat' },
          { stockItem: 'Heart Chocolates', category: 'Sweets' },
          { stockItem: 'Rose (plastic)', category: 'Other' } ]


      );
      assert.deepEqual(result, [ { category: 'Dairy', AmountSold: 30 } ]);
  });
});


describe("popularCategoryWeek4", function(){
  it("should return the most popular category for week 4",function(){
      var result= mostPopularCategory.popularCategoryWeek4(
        [{ stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 }],
        [ { stockItem: 'Bananas - loose', category: 'Fruit' },
          { stockItem: 'Imasi', category: 'Dairy' },
          { stockItem: 'Bread', category: 'Baked_Goods' },
          { stockItem: 'Chakalaka Can', category: 'Canned_Goods' },
          { stockItem: 'Coke 500ml', category: 'Cooldrink' },
          { stockItem: 'Cream Soda 500ml', category: 'Cooldrink' },
          { stockItem: 'Fanta 500ml', category: 'Cooldrink' },
          { stockItem: 'Gold Dish Vegetable Curry Can',category: 'Canned_Goods' },
          { stockItem: 'Iwisa Pap 5kg', category: 'Cereal' },
          { stockItem: 'Milk 1l', category: 'Dairy' },
          { stockItem: 'Mixed Sweets 5s', category: 'Sweets' },
          { stockItem: 'Shampoo 1 litre', category: 'Hygiene' },
          { stockItem: 'Soap Bar', category: 'Hygiene' },
          { stockItem: 'Top Class Soy Mince', category: 'Meat' },
          { stockItem: 'Heart Chocolates', category: 'Sweets' },
          { stockItem: 'Rose (plastic)', category: 'Other' } ]);
      assert.deepEqual(result, [ { category: 'Canned_Goods', AmountSold: 63 } ]);
  });
});

describe("mostProfitableProduct",function(){
  it("should return the most profitable product of each week",function(){
    var result = mostProfitableProduct.mostProfitableProduct();
    assert.deepEqual(result,{"week1":"Imasi","week2":"Imasi","week3":"Imasi","week4":"Imasi"});
  });
});

describe("mostProfitableCategory",function(){
  it("should return the most profitable category of each week",function(){
    var result = mostProfitableCategory.mostProfitableCategory();
    assert.deepEqual(result,{"week1":"Dairy","week2":"Dairy","week3":"Dairy","week4":"Dairy"} );
  });
});
