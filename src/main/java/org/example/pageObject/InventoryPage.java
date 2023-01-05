package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class InventoryPage {
    public static WebDriver driver;

    public InventoryPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-backpack']")
    private WebElement basketItem1;

    public void clickBasket1(){
        basketItem1.click();
    }

    public void filterProductBy(String filter){
        Select b = new Select (driver.findElement(By.xpath("//select[@class='product_sort_container']")));
        b.selectByVisibleText(filter);
    }
}
