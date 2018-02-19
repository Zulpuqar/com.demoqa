package demoqa.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber", "json:target/report.json" },
		features = "src/test/resources/demoqa_Features/",
		glue = "demoqa.stepDeffs", 
		tags = "@test",
		dryRun = false
		
		)

public class CukesRunner {

}
