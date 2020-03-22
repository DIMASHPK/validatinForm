This project creact by create-react-app and i use in this app react-redux.
To work in project you need to clone this repo branch master
then you need npm i, cd to your app and npm start

Now this app have some validation for three inputs.
This validation locate in ValidationReducer

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
