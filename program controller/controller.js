
const fs=require('fs')


const filedata = JSON.parse(fs.readFileSync('signupstorage.json','utf-8'))


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

const userarray=[]




module.exports ={ loginGet : (req,res)=>{
    if(req.session.username){
        res.render('home',{Data:""})
    }else{
        res.render('login')
        
    }
    
},

loginPost: (req,res)=>{
    const {username,password} = req.body
    const datas = filedata.find((val)=>val.email === username && val.password===password);
    if(datas){
        req.session.username = username
        res.redirect('/home')

    }
    else{
        res.redirect('/')
    }

},


signupGet:(req,res)=>{
    res.render('signup',{error:''})
},


signupPost: (req,res)=>{
    let {email,password,confirmpassword} =req.body
    let userData=req.body
    
  
        
        
        const fileData = JSON.parse(fs.readFileSync('signupstorage.json','utf-8'))
        let userExist= fileData.find((val)=>val.email === email)
        if(userExist){
            res.render('signup',{error:'User already exist go to login'})
        }else if(!emailRegex.test(email)){
            res.render('signup',{error:'invalid email address'})
        }
        else if(!passwordRegex.test(password)){
            res.render('signup',{error:'invalid password format'})
        }
        else if(password!==confirmpassword){
            res.render('signup',{error:'your password and confirm password are not equal'})
        }
        else{
    
            fileData.push(req.body)
            
            fs.writeFile('signupstorage.json',JSON.stringify(fileData,null,2),(err,data)=>{
              if(err){
                console.log('error occured while reading your file');
              }else{
                res.render('login')
              }
            })
            
        
        
    }
},

logoutGet: (req,res)=>{
    req.session.destroy(()=>{
        res.render('login')
    })
}



}