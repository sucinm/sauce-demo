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

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement selectContainer;

    @FindBy(className = "shopping_cart_link")
    private  WebElement buttonCart;

    @FindBy(xpath = "//span[.='Products']")
    private WebElement displayLandingPage;

    @FindBy(className = "inventory_list")
    private WebElement productContainer;

//    @FindBy(xpath = "//button[.='Add to cart']")
//    private WebElement buttonAddToCart;

    public void clickBasket1(){
        basketItem1.click();
    }
    public void sortProductBy(String sortBy){
        Select b = new Select (selectContainer);
        b.selectByVisibleText(sortBy);
    }

    public boolean isDisplayLandingPage(){
        return displayLandingPage.isDisplayed();
    }

    public void clickCart(){
        buttonCart.click();
    }

    public void addToCart(String products) throws InterruptedException {
        String[] listOfProduct = products.split(",");
        WebElement selectedProduct;
        System.out.println("check out product");
        for (String productName:
                listOfProduct) {

            System.out.println(productName);
            productContainer.findElement(By.xpath("//div[.='"+ productName +"']")).findElement(By.xpath("//button[.='Add to cart']")).click();
        }
        Thread.sleep(5000);

    }
}
