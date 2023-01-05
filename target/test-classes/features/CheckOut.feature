@CheckOut
  Feature: Feature check out

#    Scenario: Normal login
#      Given User open the website sauce demo
#      When User input "standard_user" as userName and input "secret_sauce" as password
#      And User pick item Sauce Labs Backpack
#
#    Scenario: Sort Product and Add Product To Cart
#      Given User open the website sauce demo
#      When User input "standard_user" as userName and input "secret_sauce" as password
#      Then User already on landing page
#      And User sort product by "Price (low to high)" as sortBy
#      And User pick item Sauce Labs Backpack

    Scenario: Checkout product
      Given User open the website sauce demo
      When User input "standard_user" as userName and input "secret_sauce" as password
      Then User already on landing page
      And User sort product by "Name (Z to A)" as sortBy
      And User checkout "Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)" as products to cart
      And User verify that "Sauce Labs Backpack,Test.allTheThings() T-Shirt (Red)" as products in a list
      And User remove  "Test.allTheThings() T-Shirt (Red)" as products in a list