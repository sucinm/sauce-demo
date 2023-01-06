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

    @FindBy(xpath = "//span[.='Checkout: Your Information']")
    private WebElement displayCheckOutInfoPage;

    @FindBy(xpath = "//span[.='Checkout: Overview']")
    private WebElement displayCheckOutSummaryPage;

    @FindBy(xpath = "//span[.='Checkout: Complete!']")
    private WebElement displayCheckOutCompletePage;

    @FindBy(id = "cart_contents_container")
    private WebElement cartContentsContainer;

    //Page Your Information
    @FindBy(id = "first-name")
    private WebElement inputFirstName;

    @FindBy(id = "last-name")
    private WebElement inputLastName;

    @FindBy(id = "postal-code")
    private WebElement inputPostalCode;

    //End Page Your Information

    @FindBy(xpath = "//div[contains(text(),'Item total:')]")
    private WebElement  detailItemTotal;

    @FindBy(xpath = "//div[contains(text(),'Tax:')]")
    private WebElement  detailTax;

    @FindBy(xpath = "//div[contains(text(),'Total:')]")
    private WebElement  detailTotal;

    @FindBy(id = "checkout")
    private WebElement buttonCheckOut;
    @FindBy(id = "continue")
    private WebElement buttonContinueOnYourInformation;

    @FindBy(id = "finish")
    private WebElement buttonFinishCheckOut;

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
                return false;
            }
        }
        return dataReturn;
    }

    public void removeToCartContainer(String products) {
        String[] listOfProduct = products.split(",");
        WebElement selectedProduct;
        for (String productName:
                listOfProduct) {
            String xPathSelectedProduct = "//button[@id='remove-"+productName.toLowerCase().replace(" ", "-")+"']";
            selectedProduct = cartContentsContainer.findElement(By.xpath(xPathSelectedProduct));
            selectedProduct.click();
        }
    }

    public void clickButtonCheckOut(){
        buttonCheckOut.click();
    }

    public void setFirstName(String firstName){
        inputFirstName.sendKeys(firstName);
    }

    public void setLastName(String lastName){
        inputLastName.sendKeys(lastName);
    }

    public void setPostalCode(String postalCode){ inputPostalCode.sendKeys(postalCode); }

    public boolean isDisplayCheckOutInfoPage(){
        return displayCheckOutInfoPage.isDisplayed();
    }

    public boolean isDisplayCheckOutSummaryPage(){
        return displayCheckOutSummaryPage.isDisplayed();
    }

    public boolean isDisplayDetailTotalCheckOutSummaryPage(){
        return detailItemTotal.isDisplayed() && detailTax.isDisplayed() && detailTotal.isDisplayed();
    }
    public void clickButtonContinueOnYourInformation(){
        buttonContinueOnYourInformation.click();
    }

    public void clickButtonFinish(){
        buttonFinishCheckOut.click();
    }
    public boolean isDisplayCheckOutCompletePage(){
        return displayCheckOutCompletePage.isDisplayed();
    }
}
