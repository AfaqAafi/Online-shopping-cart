
function signup(event){
    event.preventDefault();
      let fname = document.getElementById('fname').value  
      let lname = document.getElementById('lname').value  
      let email = document.getElementById('email').value  
      let password = document.getElementById('password').value  
    const newUser = {
      fname,
      lname,
      email,
      password,  
    };
  let userData = localStorage.getItem("user-data");
  userData = JSON.parse(userData)  
console.log(userData);
  if(!userData){
    userData = []
  }
  const foundUserIndex = userData.findIndex(el => {
    return el.email === email || el.password === password
  })

  if(foundUserIndex >= 0){
    return alert("Email/Password alreay taken")
    
  }
  userData.push(newUser)

  localStorage.setItem("user-data", JSON.stringify(userData))
  window.location.href = "login.html";
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOgin Functionality

function auth(event){
event.preventDefault();

let password, email
password =   document.getElementById('password').value
email =  document.getElementById('email').value 

let userData = localStorage.getItem("user-data")
userData = JSON.parse(userData)

if(!userData){
  userData = [];
}

const foundUser = userData.find((el) => {
  return el.email === email
})

if(!foundUser){
  alert("User not Found")
}else{
  if(foundUser.password === password){
    localStorage.setItem("logged-in-user", JSON.stringify(foundUser))
    window.location.href = "cart.html"
  }else{
    alert("password Incorrect")
  }
}

}


