$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registration.feature");
formatter.feature({
  "line": 2,
  "name": "DemoQA Registration",
  "description": "",
  "id": "demoqa-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.before({
  "duration": 3999026832,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the signup page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStepDef.user_is_on_the_signup_page()"
});
formatter.result({
  "duration": 12399272555,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User signs up for new account on registration page.",
  "description": "",
  "id": "demoqa-registration;user-signs-up-for-new-account-on-registration-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User enters valid \u003cfirstName\u003e and \u003clastName\u003e",
  "rows": [
    {
      "cells": [
        "firstName",
        "Jimmy"
      ],
      "line": 9
    },
    {
      "cells": [
        "lastName",
        "John"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User chooses maritual status and hobby",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User chooses country of origin",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters valid date of birth",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User provides up to date contact number",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters username and valid email",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User chooses profile icon",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User gives a brief self description",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters passwords, system varifies password level:",
  "rows": [
    {
      "cells": [
        "Invalid",
        "Jimmy"
      ],
      "line": 19
    },
    {
      "cells": [
        "Weak",
        "JimmyJohns@@12"
      ],
      "line": 20
    },
    {
      "cells": [
        "Strong",
        "JimmyJohns@#\u0026$123"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User submits the application",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User should see the approval message",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterStepDef.user_enters_valid_firstName_and_lastName(String,String\u003e)"
});
formatter.result({
  "duration": 2284027215,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_chooses_maritual_status_and_hobby()"
});
formatter.result({
  "duration": 3245980891,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_chooses_country_of_origin()"
});
formatter.result({
  "duration": 1865079009,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_enters_valid_date_of_birth()"
});
formatter.result({
  "duration": 3448848276,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_provides_up_to_date_contact_number()"
});
formatter.result({
  "duration": 705788086,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_enters_username_and_valid_email()"
});
formatter.result({
  "duration": 1351651389,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_chooses_profile_icon()"
});
formatter.result({
  "duration": 592990045,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_gives_a_brief_self_description()"
});
formatter.result({
  "duration": 1789484245,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_enters_passwords_system_varifies_password_level(String,String\u003e)"
});
formatter.result({
  "duration": 7958656823,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_submits_the_application()"
});
formatter.result({
  "duration": 4203516963,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_should_see_the_approval_message()"
});
formatter.result({
  "duration": 3113661975,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat demoqa.pages.RegistrationPage.registeredMsgVarification(RegistrationPage.java:83)\r\n\tat demoqa.stepDeffs.RegisterStepDef.user_should_see_the_approval_message(RegisterStepDef.java:185)\r\n\tat ✽.And User should see the approval message(registration.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 13431559,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-N9UK3TF\u0027, ip: \u0027192.168.2.117\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dC:\\Users\\NEWTON~1\\AppData\\Local\\Temp\\scoped_dir4512_26405}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.167, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d89c35d8078551ad101f7fd18772ac89\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\r\n\tat demoqa.stepDeffs.Hook.tearDown(Hook.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:539)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:761)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:461)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:207)\r\n",
  "status": "failed"
});
});