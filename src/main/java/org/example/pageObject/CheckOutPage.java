package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class CheckOutPage {
    public static WebDriver driver;

    public CheckOutPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//span[.='Your Cart']")
    private WebElement displayCheckOutPage;

    @FindBy(id = "cart_contents_container")
    private  WebElement cartContentsContainer;

    public boolean isDisplayCheckOutPage(){
        return displayCheckOutPage.isDisplayed();
    }

    public boolean isDisplayProduct(String products) {
        boolean dataReturn = false;
        String[] listOfProduct = products.split(",");
        WebElement product;
        for (String productName:
                listOfProduct) {
            product = cartContentsContainer.findElement(By.xpath("//div[text()='"+ productName +"']"));
            dataReturn = product.isDisplayed();
            if (!dataReturn){
                return dataReturn;
            }
        }

        return dataReturn;
    }

    public void removeToCartContainer(String products) {
        String[] listOfProduct = products.split(",");
        WebElement selectedProduct;
        for (String productName:
                listOfProduct) {
            String xPathSelectedProduct = "//button[@id='remove-'"+productName.toLowerCase().replace(" ", "-")+"']";
            selectedProduct = cartContentsContainer.findElement(By.xpath(xPathSelectedProduct));
            selectedProduct.click();
        }
    }
}
