package com.factory;




public class PageFactory {
	
	private static PageFactory instance =null;
	private   HomePage homePage;
	private LoginPage loginPage;
	
	private PageFactory() {
		
	}

	public static PageFactory getInstance() {
	
		if(instance==null) {
			
			instance =new PageFactory();
		}
		return instance;
	}
	
	public void reset()
	{
		homePage =null;
		loginPage=null;
	}	
	 public HomePage homePage() {
		 
		 if (homePage ==null) {
			 
			homePage =new HomePage(); 
		 }
		 return homePage;
	 }
	
	 public LoginPage loginPage() {
		 
		if (loginPage ==null) {
			
			loginPage = new LoginPage();
		} 
		 return loginPage;
	 }
	 
	 
	 
	 
	 
	 
}
