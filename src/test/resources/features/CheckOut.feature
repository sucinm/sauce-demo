@CheckOut
  Feature: Feature check out

    Scenario: Normal login
      Given User open the website sauce demo
      When User input "standard_user" as userName and input "secret_sauce" as password
      And User pick item Sauce Labs Backpack

    Scenario: Filter Product and Add Product To Cart
      Given User open the website sauce demo
      When User input "standard_user" as userName and input "secret_sauce" as password
      And User select "Price (low to high)" to Filter Product
      And User pick item Sauce Labs Backpack
