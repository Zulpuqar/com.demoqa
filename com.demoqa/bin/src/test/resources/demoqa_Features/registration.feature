@test 
Feature: DemoQA Registration 

Background: 
	Given User is on the signup page 
	
Scenario: User signs up for new account on registration page. 
	When User enters valid <firstName> and <lastName> 
		|firstName    |Jimmy            |
		|lastName 	  |John             |	
	And User chooses maritual status and hobby 
	And User chooses country of origin   
	Then User enters valid date of birth 
	And User provides up to date contact number 
	And User enters username and valid email 
	And User chooses profile icon 
	Then User gives a brief self description 
	And User enters passwords, system varifies password level: 
		|Invalid      |Jimmy            |
		|Weak         |JimmyJohns@@12   |
		|Strong       |JimmyJohns@#&$123|
	Then User submits the application 
	And User should see the approval message 	
		
