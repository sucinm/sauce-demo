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
  "duration": 10873147625,
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
  "line": 21,
  "name": "User checkout \"Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)\" as products to cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User verify that \"Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User remove  \"Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 370964292,
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
  "duration": 3282333791,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 124587250,
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
  "duration": 412241166,
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
  "duration": 10351588000,
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
  "duration": 74071709,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027Sauce Labs Backpack\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.124)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027nsystem-mbp\u0027, ip: \u0027fe80:0:0:0:808:7fcd:808d:eb36%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [02864f3911481afe55a1a3d45cf2d14c, findChildElement {id\u003d086f95ab-51a5-4073-aee1-fdfd14243545, using\u003dxpath, value\u003d//div[text()\u003d\u0027Sauce Labs Backpack\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: /var/folders/00/xzw63_pj58g...}, goog:chromeOptions: {debuggerAddress: localhost:62306}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:62306/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 02864f3911481afe55a1a3d45cf2d14c\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:221)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\n\tat com.sun.proxy.$Proxy21.findElement(Unknown Source)\n\tat org.example.pageObject.CheckOutPage.isDisplayProduct(CheckOutPage.java:34)\n\tat step_definitions.PurchaseSteps.verifyListOfProduct(PurchaseSteps.java:54)\n\tat ✽.And User verify that \"Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)\" as products in a list(features/CheckOut.feature:22)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 202118583,
  "status": "passed"
});
});