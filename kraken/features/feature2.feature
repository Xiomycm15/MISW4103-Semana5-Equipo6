Feature: Inicio de sesión

@user1 @web
Scenario: Inicio sesión y veo mis posts
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 7 seconds
  And I click on posts
