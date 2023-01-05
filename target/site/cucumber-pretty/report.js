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
  "duration": 11788533834,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Normal login",
  "description": "",
  "id": "feature-check-out;normal-login",
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
  "name": "User pick item Sauce Labs Backpack",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 355250583,
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
  "duration": 3329677375,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 5089763750,
  "status": "passed"
});
formatter.after({
  "duration": 283000209,
  "status": "passed"
});
formatter.before({
  "duration": 7095890000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Filter Product and Add Product To Cart",
  "description": "",
  "id": "feature-check-out;filter-product-and-add-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User select \"Price (low to high)\" to Filter Product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User pick item Sauce Labs Backpack",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 285186750,
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
  "duration": 3224331791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 13
    }
  ],
  "location": "PurchaseSteps.filterProduct(String)"
});
formatter.result({
  "duration": 455044833,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 5073151250,
  "status": "passed"
});
formatter.after({
  "duration": 126705542,
  "status": "passed"
});
});