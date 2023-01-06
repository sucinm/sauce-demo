@CheckOut
  Feature: Feature check out

    Scenario: Add Product To Cart
      Given User open the website sauce demo
      When User input "standard_user" as userName and input "secret_sauce" as password
      When User checkout "Sauce Labs Backpack" as products to cart
      Then User already on checkout page

    Scenario: Sort Product and Add Product To Cart
      Given User open the website sauce demo
      When User input "standard_user" as userName and input "secret_sauce" as password
      Then User already on landing page
      And User sort product by "Price (low to high)" as sortBy
      When User checkout "Sauce Labs Backpack" as products to cart
      Then User already on checkout page

    Scenario: Checkout product
      Given User open the website sauce demo
      When User input "standard_user" as userName and input "secret_sauce" as password
      Then User already on landing page
      When User sort product by "Name (Z to A)" as sortBy
      When User checkout "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)" as products to cart
      Then User already on checkout page
      Then User verify that "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)" as products in a list
      When User remove  "Test.allTheThings() T-Shirt (Red)" as products in a list
      And User click button checkout
      Then User already on check out info page
      When User submit "Suci" as first name, "Maharani" as last name, "11450" as postal code in form checkout information
      Then User already on checkout summary page
      Then User verify item total, tax, total on checkout summary page
      And User click button finish
      Then User already in checkout complete page


