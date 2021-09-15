# Password Generator
```
The Password Generator is an application that enables employees to generate random
passwords based on criteria that they’ve selected. It runs in the browser and
features dynamically updated HTML and CSS powered by JavaScript. It has a responsive
user interface that adapts to multiple screen sizes.
```

## Password Types

The user can select any sized password from 8 to 128 characters.  The character types
can include any combination of one or more of the following types:
* Upper cse letters
* Lower cse letters
* Numbers
* Special characters

## User Story

```
From time to time, an employee with access to sensitive data will need to conveniently
generate a new password which is random and strong to meet certain criteria, providing the best possible security.
```

## Features of the Password Generator application

* When the user clicks the button to generate a password, a series of prompts
is presented to collect the desired password criteria

* First, the user is prompted for the length of the password.
* If the chosen length is not at least 8 characters, then the user receives 
an alert saying that the chosen length is too short.

* If the chosen length exceeds 128 characters, then the user receives 
an alert saying that the chosen length is too long.

* Once the chosen length is validated, the user is asked for character types
  to include in the password.
  
* Character types can include lowercase, uppercase, numeric, and/or special characters.

* Each answer for every prompt input is validated to ensure that least one character 
  type gets selected.

* When all prompts are answered and validated, a password is generated that matches the selected criteria

* When the password is generated, it is displayed in the bordered text area box.


## Image capture of the application
```
This image shows the application when it is ready to accept user input.  The user
clicks on the large red Generate Password button to receive prompts for the
desired input.
```
![Password Generator demo](./Assets/images/Password-Generator-1.gif)

```
The next image shows the application's appearance and functionality as a responsive
display on a mobile device.  This is after it has returned the requested password.
In this example, the Password Generator was given user input requesting a password with
length 50 characters, chosen randomly from Special characters and Lowercase letters.
```
![Password Generator demo](./Assets/images/Password-Generator.gif)

## Link to the live deployed site:
http://cchampness.github.io/Password-Generator
- - -
Chris Champness
