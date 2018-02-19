package demoqa.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class Driver {

	private static WebDriver driver;

	public static WebDriver getInstance() {
		if (driver == null || ((RemoteWebDriver) driver).getSessionId() == null) {
			switch (Config.getProperty("browser")) {
			case "firefox":
				System.setProperty("webdriver.firefox.driver", Config.getProperty("firefox"));
				driver = new FirefoxDriver();
				break;
			case "chrome":	 
				System.setProperty("webdriver.chrome.driver", Config.getProperty("chrome"));
				driver = new ChromeDriver();
				break;
			case "MacbookChrome":	
				System.setProperty("webdriver.chrome.driver", Config.getProperty("macbookChrome"));
				driver = new ChromeDriver();
				break;
			case "ie":
				System.setProperty("webdriver.iexplorer.driver", Config.getProperty("ie"));
				driver = new InternetExplorerDriver();
				break;
			default:
				System.setProperty("webdriver.chrome.driver", Config.getProperty("chrome"));
				driver = new ChromeDriver();
			}
		}
		return driver;
	}

	public static void closeDriver() {
		if (driver != null) {
			driver.quit();
		}

	}
}
