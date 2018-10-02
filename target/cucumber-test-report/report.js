$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/shafee.feature");
formatter.feature({
  "name": "ecobags.com login functionality",
  "description": "  This explain how verious login functionality will work",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "1.Valid user with valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "EcobagsCommon.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "EcobagsCommon.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ecobags home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep1.ecobags_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep1.user_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep1.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user email as \"swapanny79@yahoo.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password as \"ecobags2018\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_click_login_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 36 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.1.158\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49173}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778), userDataDir\u003dC:\\Users\\SHIFTS~1\\AppData\\Local\\Temp\\scoped_dir3128_24929}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d8c8faeb208086778d20f4891314adf5\n*** Element info: {Using\u003dclass name, value\u003d.btn btn-primary btn-large}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:460)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.bdd.LoginPageStep1.user_click_login_button(LoginPageStep1.java:32)\r\n\tat ✽.User click login button(feature/shafee.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep1.login_success_message_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2.Invalid user with valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "EcobagsCommon.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "EcobagsCommon.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ecobags home page should display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep1.user_click_login_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep1.browser_display_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter user email as \"invalid@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter password as \"ecobags2018\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep1.browser_display_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login not success message \"Incorrect email or password.\" display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.login_not_success_message_display(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.step({
  "name": "Ecobags home page should display",
  "keyword": "Then "
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter user email as \"\u003cEmailAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Password"
      ]
    },
    {
      "cells": [
        "swapanny79@yahoo.com",
        "ecobags2018"
      ]
    },
    {
      "cells": [
        "salmamamun91@gmail.com",
        "ecobags91"
      ]
    }
  ]
});
formatter.scenario({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "EcobagsCommon.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "EcobagsCommon.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ecobags home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep1.ecobags_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep1.user_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep1.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user email as \"swapanny79@yahoo.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password as \"ecobags2018\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_click_login_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.1.158\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49262}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778), userDataDir\u003dC:\\Users\\SHIFTS~1\\AppData\\Local\\Temp\\scoped_dir4860_14224}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 596709b1bd8d21407463b1d890a9a83f\n*** Element info: {Using\u003dclass name, value\u003d.btn btn-primary btn-large}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:460)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.bdd.LoginPageStep1.user_click_login_button(LoginPageStep1.java:32)\r\n\tat ✽.User click login button(feature/shafee.feature:56)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep1.login_success_message_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "EcobagsCommon.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "EcobagsCommon.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ecobags home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep1.ecobags_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStep1.user_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep1.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user email as \"salmamamun91@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password as \"ecobags91\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep1.user_click_login_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 35 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.1.158\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49306}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778), userDataDir\u003dC:\\Users\\SHIFTS~1\\AppData\\Local\\Temp\\scoped_dir840_4362}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 966bddfa4ad5ab058b9178553b78d5d0\n*** Element info: {Using\u003dclass name, value\u003d.btn btn-primary btn-large}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:460)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.bdd.LoginPageStep1.user_click_login_button(LoginPageStep1.java:32)\r\n\tat ✽.User click login button(feature/shafee.feature:56)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep1.login_success_message_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});