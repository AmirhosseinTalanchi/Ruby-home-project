let $ = document
const inputUsername = $.querySelector(".login-form__input-user")
const inputPassword = $.querySelector(".login-form__input-pass")
const btn = $.querySelector(".login-form__input-btn")
const warning = $.querySelector(".login-form__warning")



let  text 

let user = [
    {username:"ali", password: 123}
]

let Username  
let Password 

function show(){

    warning.innerHTML =  text;

    setInterval(function(){
        
        warning.innerHTML = ""
    },2000)
}





btn.addEventListener("click" ,function(){


    if(inputUsername.value === ""){
        text = "Please Enter a Username"
        show()
    }
    else if(inputPassword.value === ""){
        text = "Please Enter a Password"
        show()
    }
    else{

        Username = inputUsername.value
        Password = inputPassword.value

        let isUser = user.some(function(user){
            return user.username == Username
        })

        if(isUser){
            text = "Welcome"
            show()
            setInterval(function(){
                window.location.href= "index.html"
            },3000)
        }
        else{
            text = "Username or Password is not corect"
            show()
        }
        
    }

})























