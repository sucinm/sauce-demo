$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CheckOut.feature");
formatter.feature({
  "line": 2,
  "name": "Feature check out",
  "description": "",
  "id": "feature-check-out",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CheckOut"
    }
  ]
});
formatter.before({
  "duration": 8993107875,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#    Scenario: Normal login"
    },
    {
      "line": 5,
      "value": "#      Given User open the website sauce demo"
    },
    {
      "line": 6,
      "value": "#      When User input \"standard_user\" as userName and input \"secret_sauce\" as password"
    },
    {
      "line": 7,
      "value": "#      And User pick item Sauce Labs Backpack"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#    Scenario: Sort Product and Add Product To Cart"
    },
    {
      "line": 10,
      "value": "#      Given User open the website sauce demo"
    },
    {
      "line": 11,
      "value": "#      When User input \"standard_user\" as userName and input \"secret_sauce\" as password"
    },
    {
      "line": 12,
      "value": "#      Then User already on landing page"
    },
    {
      "line": 13,
      "value": "#      And User sort product by \"Price (low to high)\" as sortBy"
    },
    {
      "line": 14,
      "value": "#      And User pick item Sauce Labs Backpack"
    }
  ],
  "line": 16,
  "name": "Checkout product",
  "description": "",
  "id": "feature-check-out;checkout-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User sort product by \"Name (Z to A)\" as sortBy",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#      And User checkout \"Sauce Labs Backpack\" as product to cart"
    },
    {
      "line": 22,
      "value": "#      And User checkout \"Test.allTheThings() T-Shirt (Red)\" as product to cart"
    },
    {
      "line": 23,
      "value": "#      And User click icon cart"
    }
  ],
  "line": 24,
  "name": "User checkout \"Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)\" as products to cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User verify that \"Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User remove  \"Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 823279792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 2914366375,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 345044125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 22
    }
  ],
  "location": "PurchaseSteps.sortProduct(String)"
});
formatter.result({
  "duration": 190955792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)",
      "offset": 15
    }
  ],
  "location": "PurchaseSteps.addProductToCart(String)"
});
formatter.result({
  "duration": 10655552959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)",
      "offset": 18
    }
  ],
  "location": "PurchaseSteps.verifyListOfProduct(String)"
});
formatter.result({
  "duration": 93714084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 14
    }
  ],
  "location": "PurchaseSteps.removeListOfProduct(String)"
});
formatter.result({
  "duration": 5068509208,
  "status": "passed"
});
formatter.after({
  "duration": 135411416,
  "status": "passed"
});
});