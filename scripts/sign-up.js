let $ = document

const inputUsername = $.querySelector(".sign-up__input-user")
const inputPassword = $.querySelector(".sign-up__input-pass")
const btn = $.querySelector(".sign-up__input-btn")
const warning = $.querySelector(".sign-up__warning")


let  text 

let user = [
    {usernmae:"ali", password: 123}
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

        user.push({usernmae:Username,password:Password})


        console.log(user)

        
        text = "Welcome"
        show()
        setInterval(function(){
            window.location.href="index.html"
        },3000)
    }

})





