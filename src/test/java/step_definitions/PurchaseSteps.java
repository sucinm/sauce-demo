package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.CheckOutPage;
import org.example.pageObject.InventoryPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @When("User sort product by \"(.*)\" as sortBy")
    public void sortProduct(String sortBy){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.sortProductBy(sortBy);
    }

    @Then("User already on landing page")
    public void verifyLandingPage(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.isDisplayLandingPage());
    }

    @When("User checkout \"(.*)\" as products to cart")
    public void addProductToCart(String products) {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.addToCart(products);
        inventoryPage.clickCart();
    }

    @Then("User already on checkout page")
    public void verifyCheckOutPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCheckOutPage());
    }

    @Then("User verify that \"(.*)\" as products in a list")
    public void verifyListOfProduct(String products) {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayProduct(products));
    }

    @When("User remove  \"(.*)\" as products in a list")
    public void removeListOfProduct(String products) {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.removeToCartContainer(products);
    }

    @And("User click button checkout")
    public void clickButtonCheckOut(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.clickButtonCheckOut();
    }

    @When("User submit \"(.*)\" as first name, \"(.*)\" as last name, \"(.*)\" as postal code in form checkout information")
    public void insertCheckOutInformation(String firstName, String lastName, String postalCode){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.setFirstName(firstName);
        checkOutPage.setLastName(lastName);
        checkOutPage.setPostalCode(postalCode);
        checkOutPage.clickButtonContinueOnYourInformation();
    }

    @Then("User already on check out info page")
    public void verifyCheckOutInfoPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCheckOutInfoPage());
    }

    @Then("User already on checkout summary page")
    public void verifyCheckOutSummaryPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCheckOutSummaryPage());
    }

    @Then("User verify item total, tax, total on checkout summary page")
    public void verifyDetailTotalCheckOutSummaryPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayDetailTotalCheckOutSummaryPage());
    }

    @And("User click button finish")
    public void clickButtonFinishCheckOut(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.clickButtonFinish();
    }

    @Then("User already in checkout complete page")
    public void verifyCheckOutCompletePage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCheckOutCompletePage());
    }
}
