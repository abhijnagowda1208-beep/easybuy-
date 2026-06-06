let myForm=document.querySelector('form')
console.log(myForm)

myForm.onsubmit=(e)=>{
    e.preventDefault()
    console.log("Form submitted")

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)

    let userDetails={}
    inputBox.forEach((input)=>{
        //console.log(input.value)
        userDetails[input.name]=input.value
    })
    console.log(userDetails)

    let jsonData=JSON.stringify(userDetails)
    console.log(jsonData)

    localStorage.setItem('userData',jsonData)
    alert("User Register Successfully")
    window.location="./login.html"
}