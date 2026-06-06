let myForm=document.querySelector('form')
console.log(myForm)

myForm.onsubmit=(e)=>{
    e.preventDefault()
    console.log("form submitted")

    let email=document.querySelectorAll('input')[0].value
    console.log(email)
    let password=document.querySelectorAll('input')[1].value
    console.log(password)

    let storedData=JSON.parse(localStorage.getItem('userData'))
    console.log(storedData)

    if(storedData){
        if(email===storedData.email && storedData.password===password){
            alert("Login successful")
            window.location.href="./homepage.html"
        }else{
             alert("Invalid email or password")
    }  
} 

}