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
  "duration": 16899038834,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Add Product To Cart",
  "description": "",
  "id": "feature-check-out;add-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User checkout \"Sauce Labs Backpack\" as products to cart",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 397387417,
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
  "duration": 3020790541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 15
    }
  ],
  "location": "PurchaseSteps.addProductToCart(String)"
});
formatter.result({
  "duration": 209057709,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutPage()"
});
formatter.result({
  "duration": 66744166,
  "status": "passed"
});
formatter.after({
  "duration": 152941833,
  "status": "passed"
});
formatter.before({
  "duration": 13452551583,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Sort Product and Add Product To Cart",
  "description": "",
  "id": "feature-check-out;sort-product-and-add-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User sort product by \"Price (low to high)\" as sortBy",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checkout \"Sauce Labs Backpack\" as products to cart",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User already on checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 134360833,
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
  "duration": 2722479791,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 130438500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 22
    }
  ],
  "location": "PurchaseSteps.sortProduct(String)"
});
formatter.result({
  "duration": 375230250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 15
    }
  ],
  "location": "PurchaseSteps.addProductToCart(String)"
});
formatter.result({
  "duration": 445078250,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutPage()"
});
formatter.result({
  "duration": 91868500,
  "status": "passed"
});
formatter.after({
  "duration": 108403541,
  "status": "passed"
});
formatter.before({
  "duration": 21485427500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checkout product",
  "description": "",
  "id": "feature-check-out;checkout-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User sort product by \"Name (Z to A)\" as sortBy",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User checkout \"Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)\" as products to cart",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User already on checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User verify that \"Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User remove  \"Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User click button checkout",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User already on check out info page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User submit \"Suci\" as first name, \"Maharani\" as last name, \"11450\" as postal code in form checkout information",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User already on checkout summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User verify item total, tax, total on checkout summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User click button finish",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User already in checkout complete page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 138459375,
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
  "duration": 2808069834,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 102801167,
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
  "duration": 402678083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)",
      "offset": 15
    }
  ],
  "location": "PurchaseSteps.addProductToCart(String)"
});
formatter.result({
  "duration": 569319208,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutPage()"
});
formatter.result({
  "duration": 99080458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)",
      "offset": 18
    }
  ],
  "location": "PurchaseSteps.verifyListOfProduct(String)"
});
formatter.result({
  "duration": 211284000,
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
  "duration": 201047125,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickButtonCheckOut()"
});
formatter.result({
  "duration": 1095031167,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutInfoPage()"
});
formatter.result({
  "duration": 30045667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suci",
      "offset": 13
    },
    {
      "val": "Maharani",
      "offset": 35
    },
    {
      "val": "11450",
      "offset": 60
    }
  ],
  "location": "PurchaseSteps.insertCheckOutInformation(String,String,String)"
});
formatter.result({
  "duration": 1369685166,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutSummaryPage()"
});
formatter.result({
  "duration": 67810167,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyDetailTotalCheckOutSummaryPage()"
});
formatter.result({
  "duration": 63600875,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickButtonFinishCheckOut()"
});
formatter.result({
  "duration": 71874417,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutCompletePage()"
});
formatter.result({
  "duration": 20480417,
  "status": "passed"
});
formatter.after({
  "duration": 110198708,
  "status": "passed"
});
});