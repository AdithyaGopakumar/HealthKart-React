## GetAllUser

(GET)> http://localhost:5000/api/auth/users

## Register

(POST)> http://localhost:5000/api/auth/register
(body) => {"name":"Adithya", "email":"adithya@gmail.com","password":"12345678","phone":"343432","role":"user"}

## Login

(POST) => http://localhost:5000/api/auth/login
(body) => {"email":"adithya@gmail.com","password":"12345678"} , (response)=> {auth:true,token:'dgsdg'}

## UserInfo

(GET) => http://localhost:5000/api/auth/userInfo
In the header we have to pass the access token that we get from the login of that user. then if we try we will get the userInfo of that specific user
(Header) => {'access-token':'token value from login'}

## All done with Login-APP
