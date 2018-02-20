package demoqa.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Highlight {

	 public static void highLight(WebDriver driver, Object element)
	 {
	 JavascriptExecutor js=(JavascriptExecutor)driver; 
	  
	 js.executeScript("arguments[0].setAttribute('style', 'background: yellow;');", element);
	 }
	 
 	 public static void highLightElement(WebDriver driver, Object element)
	 {
	 JavascriptExecutor js=(JavascriptExecutor)driver; 
	  
	 js.executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 3px solid red;');", element);
	  
	 try 
	 {
	 Thread.sleep(500);
	 } 
	 catch (InterruptedException e) {
	  
	 System.out.println(e.getMessage());
	 } 
	  
	 js.executeScript("arguments[0].setAttribute('style','border: solid 3px white');", element); 
	  
	 }
}