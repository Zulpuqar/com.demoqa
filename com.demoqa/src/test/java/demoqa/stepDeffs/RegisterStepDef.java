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
	private String invalidPwdMsg = "* Minimum 8 characters required";
	private String weakPwdMsg = "Weak", mediumPwdMsg = "Medium", strongPwdMsg = "Strong";
	private String check = "Checked";
	private String randomString = RandomStringUtils.randomAlphabetic(5);

	@Given("^User is on the signup page$")
	public void user_is_on_the_signup_page() throws Throwable {
		// driver.get("http://demoqa.com/registration/");
		
		// The browser is launch
		driver.navigate().to(Config.getProperty("url"));

		// The title of the page is verified if displayed
		Highlight.highLightElement(driver, registration.pageTitle);
		if (registration.pageTitle.isDisplayed()) {
			System.out.println("Current page => " + registration.pageTitle.getText());
		} else {
			System.out.println("Error, page title needs attention...");
		}
	}

	@When("^User enters valid <firstName> and <lastName>$")
	public void user_enters_valid_firstName_and_lastName(Map<String, String> dataTable) throws Throwable {
		// Highlights the first and last names ands sends data
		Highlight.highLightElement(driver, registration.firstName);
		registration.firstName.sendKeys(dataTable.get("firstName"));

		Highlight.highLightElement(driver, registration.lastName);
		registration.lastName.sendKeys(dataTable.get("lastName"));
		System.out.println("+++++++  Field Check  +++++++");
		System.out.println("Date of birth............." + check);
		// Sleep method for demo purpose
		Page.sleep(1000);
	}

	@When("^User chooses maritual status and hobby$")
	public void user_chooses_maritual_status_and_hobby() throws Throwable {

		// Highlights the maritual status and followed by selecting matching status.
		Highlight.highLightElement(driver, registration.maritalStatus);
		registration.maritalStatus.click();
		Page.sleep(1000);

		Highlight.highLightElement(driver, registration.hobbyCricket);
		registration.hobbyCricket.click();
		System.out.println("Status & Hubby............" + check);
		// Sleep method for demo purpose
		Page.sleep(1000);
	}

	@When("^User chooses country of origin$")
	public void user_chooses_country_of_origin() throws Throwable {

		// Highlights, and using Select class to choose countries in drop_down list
		Highlight.highLightElement(driver, registration.countryOrigin);
		registration.countryOrigin.click();
		Select sel = new Select(registration.countryOrigin);
		sel.selectByVisibleText("United States");
		System.out.println("Country of origin........." + check);
		// Sleep method for demo purpose
		Page.sleep(1000);
	}

	@Then("^User enters valid date of birth$")
	public void user_enters_valid_date_of_birth() throws Throwable {
		// Highlight and enters Users birth dates
		Highlight.highLightElement(driver, registration.month);
		Select sel1 = new Select(registration.month);
		registration.month.click();
		sel1.selectByVisibleText("1");

		Highlight.highLightElement(driver, registration.day);
		Select sel2 = new Select(registration.day);
		registration.day.click();
		sel2.selectByVisibleText("1");

		Highlight.highLightElement(driver, registration.year);
		Select sel3 = new Select(registration.year);
		registration.year.click();
		sel3.selectByVisibleText("1998");
		System.out.println("Date of birth............." + check);
		// Sleep method for demo purpose
		Page.sleep(1000);
	}

	@Then("^User provides up to date contact number$")
	public void user_provides_up_to_date_contact_number() throws Throwable {

		Highlight.highLightElement(driver, registration.phoneNumber);
		registration.phoneNumber.sendKeys("5705705757");
		System.out.println("Contact number............" + check);
	}

	@Then("^User enters username and valid email$")
	public void user_enters_username_and_valid_email() throws Throwable {

		/* Using RandomStringUtils to create
		 * a random string as a mock username/emailname.
		 */
		Highlight.highLightElement(driver, registration.username);
		registration.username.sendKeys(randomString);

		Highlight.highLightElement(driver, registration.eMail);
		registration.eMail.sendKeys(randomString + "@gmail.com");
		System.out.println("Valid email..............." + check);

	}

	@Then("^User chooses profile icon$")
	public void user_chooses_profile_icon() throws Throwable {

		//Uploads profile picture
		String profPicture = System.getProperty("user.dir") + Config.getProperty("profilePic");
		Highlight.highLightElement(driver, file);
		file.sendKeys(profPicture);

	}

	@Then("^User gives a brief self description$")
	public void user_gives_a_brief_self_description() throws Throwable {

		Highlight.highLightElement(driver, registration.selfDescription);
		registration.selfDescription.sendKeys("Hello, there! My name is Jimmy John.");
		System.out.println("Self description.........." + check);
		Page.sleep(1000);
	}

	@Then("^User enters passwords, system varifies password level:$")
	public void user_enters_passwords_system_varifies_password_level(Map<String, String> dataTable) throws Throwable {

		pwdHelper(dataTable.get("Invalid"));
		assertEquals(invalidPwdMsg, registration.invalidPassword.getText());

		pwdHelper(dataTable.get("Weak"));
		assertEquals(weakPwdMsg, registration.warningMessage.getText());

		pwdHelper(dataTable.get("Strong"));
		assertEquals(strongPwdMsg, registration.warningMessage.getText());

		System.out.println("Password Varification....." + check);

	}

	@Then("^User submits the application$")
	public void user_submits_the_application() throws Throwable {
		// Robot robot = new Robot();
		// robot.keyPress(KeyEvent.VK_ESCAPE);

		// Submitting registration request
		Highlight.highLightElement(driver, registration.submitButton);
		Page.sleep(1500);
		registration.submitButton.click();
		Page.sleep(1500);
	}

	@Then("^User should see the approval message$")
	public void user_should_see_the_approval_message() throws Throwable {
		
			// Verifies users membership request was granted or denied
		if (registration.registeredMsgVarification()) {
			System.out.println("Registration has been Completed. ");
			System.out.println("You are now regestered! Congradulations...");
		} else {
			System.out.println("Registration had been Completed. ");
			System.out.println("You're registration request was denied...");

			// Full page screenshot will be taken and stored in target file
		}
	}

	private void pwdHelper(String password) throws InterruptedException {
		registration.password.clear();
		Highlight.highLightElement(driver, registration.password);
		registration.password.sendKeys(password);
		Page.sleep(600);

		registration.confirmPassword.clear();
		Highlight.highLightElement(driver, registration.confirmPassword);
		registration.confirmPassword.sendKeys(password);
		Page.sleep(600);
	}
}
