const email=document.getElementById('email')
const labemail=document.querySelector('.labemail')
const password=document.getElementById('passwordcheck')
const labpassword=document.querySelector('.labpassword')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/


email.onblur=()=>{
    if(!emailRegex.test(email.value)){
        labemail.innerHTML='invalid email format'
        labemail.classList.add('red')
    }
    else{
        labemail.innerHTML='E-mail'
        labemail.classList.remove('red')
    }

  password.onblur=()=>{
    if(!passwordRegex.test(password.value)){
        labpassword.innerHTML=('invalid password format')
        labpassword.classList.add('red')
    }else{
        labpassword.innerHTML=('Password')
        labpassword.classList.remove('red')
    }
  }

    
}