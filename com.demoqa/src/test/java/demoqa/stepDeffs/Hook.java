package demoqa.stepDeffs;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import demoqa.utils.Driver;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;

public class Hook {

	 @Before
	 public void setUp(){
	 Driver.getInstance().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	 Driver.getInstance().manage().window().maximize();
//	 Runtime.getRuntime().addShutdownHook(new Thread() {
//		 @Override
//		public void run() {
//			Driver.getInstance().close();
//		}
//		 
//	 });
	 }

	@After
	public void tearDown(Scenario scenario) throws IOException {
		// this is the method for taking a screenshot using cucumber
		//if (scenario.isFailed()) {
			final byte[] screenshot = ((TakesScreenshot) Driver.getInstance()).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
			
			Screenshot fullShot = new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(Driver.getInstance());
		    ImageIO.write(fullShot.getImage(),"PNG",new File(System.getProperty("user.dir") +"/target/FullPageScreenshot.png"));
		    

		//}
		Driver.closeDriver();
	}	
}


