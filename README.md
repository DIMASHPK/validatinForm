This project creact by create-react-app and i use in this app react-redux.
To work in project you need to clone this repo branch master
then you need npm i, cd to your app and npm start

Now this app have some validation for all inputs.
This validation functions located in ValidationFunc

1. I used React + Redux to build the forms.
2. User allowed to go to next step only if all fields on current step are valid.
3. There is a blue progress meter on top that shows current progress of steps.
4. When moving from step to step, the page not reload.
5. Style the app exactly as given in the screens above.
6. I used Flexbox to make my work easy.
7. I implement following validations:
   7.1.Email is required.
   7.2.Email is a valid email address. Used regex validation.
   7.3.Password is required.
   7.4.Password contains minimum 6 characters long.
   7.5.Password confirmation match the password.
   7.6.All fields in “Date of birth” are required.
   7.7.All fields in “Date of birth” should be valid respectively.
   7.7.1.DD is a number and 31 ≥ DD ≥ 1.
   7.7.2.MM is a number and 12 ≥ MM ≥ 1.
   7.7.3.YYYY is a number.
   7.8.The user should be 18 year old or more.
   7.9.One gender option must be selected from the 3 given.
   7.10.“Where did you hear about us?” is optional.
8. When a field is invalid, it show a useful message in the label itself, red in colour.
9. The “Go to Dashboard” button at the last step print all the details entered as a JSON in
   the Browser console, something like:
   9.1. { “user_data”: { “email”: ..., “password”: ..., “date_of_birth”: 1485761262,
   “gender”: “female”, “how_hear_about_us”: null } }
