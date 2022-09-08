
function signup(event){
    event.preventDefault();
      let fname = document.getElementById('fname').value  
      let lname = document.getElementById('lname').value  
      let email = document.getElementById('email').value  
      let password = document.getElementById('password').value  
      if (!fname || !lname || !email || !password) {
         return alert("You Need To Fill Up The Form"); 
      }
    let user = {
                fname: fname,
                lname: lname,
                email: email,
            password: password
            }
 let userInfo = JSON.stringify(user);
let getInfo =  JSON.parse(localStorage.getItem('user')) || [];
 getInfo.push(userInfo);
 localStorage.setItem(("user"), JSON.stringify(getInfo));
            
 alert("Account Created!");
 window.location.replace('login.html')
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOgin Functionality

function auth(event){
event.preventDefault();

let password, email
password =   document.getElementById('password').value
email =  document.getElementById('email').value 

let stored_users = JSON.parse(localStorage.getItem('user'))

console.log(stored_users.email);  // undefiend ata 


}









