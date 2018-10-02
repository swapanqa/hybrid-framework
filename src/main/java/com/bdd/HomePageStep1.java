package com.bdd;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.startsWith;

import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class HomePageStep1 extends BaseStep1 {
	
	@Then("Ecobags home page should display")
	public void ecobags_home_page_should_display() {
	    String title = driver.getTitle();
	    assertThat(title, startsWith("Online shopping for eco-friendly reusable bags, sustainable products. - ECOBAGS.com"));
	}

	@When("User click login link")
	public void user_click_login_link() {
	    driver.findElement(By.xpath("//*[@id=\"user-links\"]/li[6]/a")).click();
	}
	
	@Then("Login page should display")
	public void login_page_should_display() {
		String title = driver.getTitle();
	    assertThat(title, startsWith("Online shopping for eco-friendly reusable bags, sustainable products. - ECOBAGS.com"));
	}

	@Then("Login success message display")
	public void login_success_message_display() {
	   String msg =  driver.findElement(By.cssSelector("#handle_welcomeMainPortlet > td > table > tbody > tr:nth-child(2) > td > h1")).getText();
	   assertThat(msg, startsWith("Welcome to ECOBAGS. Cleaning up the Planet one bag at a time."));
	}

}
