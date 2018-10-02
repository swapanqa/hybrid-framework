#Author: Muhammad Almamun
#Keywords Summary : Login
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
Feature: ecobags.com login functionality
  This explain how verious login functionality will work

  #@tag1
  Scenario: 1.Valid user with valid password
	  Given Not a validated user
	  When User browse to the site
	  Then Ecobags home page should display
	  When User click login link
	  Then Browser display Login page
	  When User enter user email as "swapanny79@yahoo.com"
	  And User enter password as "ecobags2018"
	  And User click login button
	  Then Home page should display
	  And Login success message display

  Scenario: 2.Invalid user with valid password
	  Given Not a validated user
	  When User browse to the site
	  Then ecobags home page should display
	  When User click login link
	  Then Browser display Login page
	  When User enter user email as "invalid@gmail.com"
	  And User enter password as "ecobags2018"
	  And User click login button
	  Then Browser display Login page
	  And Login not success message "Incorrect email or password." display
	 
	 Scenario Outline: 3.Valid user with valid password Data Driven
	  Given Not a validated user
	  When User browse to the site
	  Then Ecobags home page should display
	  When User click login link
	  Then Browser display Login page
	  When User enter user email as "<EmailAddress>"
	  And User enter password as "<Password>"
	  And User click login button
	  Then Home page should display
	  And Login success message display
	 Examples:
      |EmailAddress        |Password    |
      |swapanny79@yahoo.com	 |ecobags2018 |
      |salmamamun91@gmail.com |ecobags91  |
	  