package demoqa.stepDeffs;

//@author Zulifukaer Xiaokelait

import static org.junit.Assert.assertEquals;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.Map;
import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demoqa.pages.RegistrationPage;
import demoqa.utils.*;


public class RegisterStepDef {

	RegistrationPage registration = new RegistrationPage();
	private WebDriver driver = Driver.getInstance();
	private WebElement country = registration.countryOrigin;
	private WebElement file = registration.chooseFile;
	private String invalidPwdMsg="* Minimum 8 characters required";
	private String weakPwdMsg="Weak", mediumPwdMsg="Medium", strongPwdMsg="Strong";
	private String check= "Checked";
	private String randomString = RandomStringUtils.randomAlphabetic(5);
	
	@Given("^User is on the signup page$")
	public void user_is_on_the_signup_page() throws Throwable {
		//driver.get("http://demoqa.com/registration/");
		//Page.sleep(2000);
	
		//The browser is launch
		driver.navigate().to(Config.getProperty("url"));
		
		//The title of the page is verified if displayed
		if (registration.pageTitle.isDisplayed()) {
			System.out.println("Current page => " + registration.pageTitle.getText());
		} else {
			System.out.println("Error, page title needs attention...");
		}
	}

	@When("^User enters valid <firstName> and <lastName>$")
	public void user_enters_valid_firstName_and_lastName(Map<String, String> dataTable) throws Throwable {
		registration.firstName.sendKeys(dataTable.get("firstName"));
		registration.lastName.sendKeys(dataTable.get("lastName"));
		System.out.println("+++++++  Field Check  +++++++");
		System.out.println("Date of birth............." + check);
		//Sleep method for demo purpose
		Page.sleep(2000);	
	}
	
	@When("^User chooses maritual status and hobby$")
	public void user_chooses_maritual_status_and_hobby() throws Throwable {
		
		registration.maritalStatus.click();
		registration.hobbyCricket.click();
		System.out.println("Status & Hubby............" + check);
		//Sleep method for demo purpose
		Page.sleep(2000);
	}
	@When("^User chooses country of origin$")
	public void user_chooses_country_of_origin() throws Throwable {

		// Using Select class to choose countries in drop_down list
		registration.countryOrigin.click();
		Select sel = new Select(registration.countryOrigin);
		sel.selectByVisibleText("United States");
		System.out.println("Country of origin........." + check);
		//Sleep method for demo purpose
		Page.sleep(2000);
	}

	@Then("^User enters valid date of birth$")
	public void user_enters_valid_date_of_birth() throws Throwable {
		//Enters Users birth dates
		Select sel1 = new Select(registration.month);
		registration.month.click();
		sel1.selectByVisibleText("1");

		Select sel2 = new Select(registration.day);
		registration.day.click();
		sel2.selectByVisibleText("1");

		Select sel3 = new Select(registration.year);
		registration.year.click();
		sel3.selectByVisibleText("1998");
		System.out.println("Date of birth............." + check);
		//Sleep method for demo purpose
		Page.sleep(2000);	}

	@Then("^User provides up to date contact number$")
	public void user_provides_up_to_date_contact_number() throws Throwable {
		registration.phoneNumber.sendKeys("5705705757");
		System.out.println("Contact number............" + check);
	}
	@Then("^User enters username and valid email$")
	public void user_enters_username_and_valid_email() throws Throwable {

		// Using RandomStringUtils to create a random string as a mock username/emailname.
		registration.username.sendKeys(randomString);
		registration.eMail.sendKeys(randomString + "@gmail.com");
		System.out.println("Valid email..............." + check);

	}

	@Then("^User chooses profile icon$")
	public void user_chooses_profile_icon() throws Throwable {
	
		String profPicture = System.getProperty("user.dir") 
				                   + Config.getProperty("profilePic");
		file.sendKeys(profPicture);
			
	}

	@Then("^User gives a brief self description$")
	public void user_gives_a_brief_self_description() throws Throwable {
		registration.selfDescription.sendKeys("Hello, there! I am Jimmy John.");
		System.out.println("Self description.........." + check);
	}

	@Then("^User enters passwords, system varifies password level:$")
	public void user_enters_passwords_system_varifies_password_level(Map<String, String> dataTable ) throws Throwable {
								
		pwdHelper(dataTable.get("Invalid"));
		assertEquals(invalidPwdMsg,registration.invalidPassword.getText());
		pwdHelper(dataTable.get("Weak"));
		assertEquals(weakPwdMsg, registration.warningMessage.getText());
		pwdHelper(dataTable.get("Strong"));
		assertEquals(strongPwdMsg, registration.warningMessage.getText());
		System.out.println("Password Varification....." + check);

	}

	@Then("^User submits the application$")
	public void user_submits_the_application() throws Throwable {
		//Robot robot = new Robot();
		//robot.keyPress(KeyEvent.VK_ESCAPE);
		
		// Submitting registration request
		
		registration.submitButton.click();
		Thread.sleep(3000);
		registration.submitButton.click();
	}

	@Then("^User should see the approval message$")
	public void user_should_see_the_approval_message() throws Throwable {
		// Verifies users membership request was granted or denied
		if(registration.registeredMsgVarification()) {
			System.out.println("Registration has been Completed. ");
			System.out.println("You are now regestered! Congradulations...");
		}else {
			System.out.println("Registration had been Completed. "); 
			System.out.println("You're registration request was denied...");
		}
	}

	private void pwdHelper(String password) throws InterruptedException {
		registration.password.clear();
		registration.confirmPassword.clear();
		registration.password.sendKeys(password);
		registration.confirmPassword.sendKeys(password);
		Thread.sleep(1000);
	}
}
