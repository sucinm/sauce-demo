package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.CheckOutPage;
import org.example.pageObject.InventoryPage;
import org.example.pageObject.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User pick item Sauce Labs Backpack")
    public void clickItemBasket1(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickBasket1();
    }

    @And("User sort product by \"(.*)\" as sortBy")
    public void sortProduct(String sortBy){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.sortProductBy(sortBy);
    }

    @And("User checkout \"(.*)\" as products to cart")
    public void addProductToCart(String products) throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.addToCart(products);
        inventoryPage.clickCart();
        Thread.sleep(5000);
    }

    @Then("User already on landing page")
    public void verifyLandingPage(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.isDisplayLandingPage());
    }
    @And("User already on checkout page")
    public void verifyCheckOutPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCheckOutPage());
    }

    @And("User verify that \"(.*)\" as products in a list")
    public void verifyListOfProduct(String products) {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayProduct(products));
    }

    @And("User remove  \"(.*)\" as products in a list")
    public void removeListOfProduct(String products) throws InterruptedException {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.removeToCartContainer(products);
        Thread.sleep(5000);
    }

}
