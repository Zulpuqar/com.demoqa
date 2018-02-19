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
  "duration": 4233172543,
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
  "duration": 2460425269,
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
  "duration": 2235168528,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_chooses_maritual_status_and_hobby()"
});
formatter.result({
  "duration": 2178764543,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_chooses_country_of_origin()"
});
formatter.result({
  "duration": 2363101000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_enters_valid_date_of_birth()"
});
formatter.result({
  "duration": 2784297215,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_provides_up_to_date_contact_number()"
});
formatter.result({
  "duration": 218026128,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_enters_username_and_valid_email()"
});
formatter.result({
  "duration": 328555271,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_chooses_profile_icon()"
});
formatter.result({
  "duration": 58796841,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_gives_a_brief_self_description()"
});
formatter.result({
  "duration": 331585719,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_enters_passwords_system_varifies_password_level(String,String\u003e)"
});
formatter.result({
  "duration": 4231367972,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_submits_the_application()"
});
formatter.result({
  "duration": 8406417221,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDef.user_should_see_the_approval_message()"
});
formatter.result({
  "duration": 106170778,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 6309627474,
  "status": "passed"
});
});