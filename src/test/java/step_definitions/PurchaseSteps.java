package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.example.pageObject.InventoryPage;
import org.example.pageObject.LoginPage;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User pick item Sauce Labs Backpack")
    public void clickItemBasket1() throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickBasket1();
        Thread.sleep(5000);
    }

    @And("User select \"(.*)\" to Filter Product")
    public void filterProduct(String filter){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.filterProductBy(filter);
    }
}
