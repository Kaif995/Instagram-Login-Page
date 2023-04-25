const form = document.querySelector('form');
function signup() {
  var email = document.getElementById('semail').value
  var pass = document.getElementById('spass').value
  localStorage.setItem('email', email)
  localStorage.setItem('pass', pass)
  alert('Data inserted Successfully')
  console.log(email)
  window.location.href = './index.html';
  
}
function signin() {
  var email = document.getElementById('lemail').value
  var pass = document.getElementById('lpass').value
  let getemail = localStorage.getItem('email')
  let getpass = localStorage.getItem('pass')
  if (email === getemail && pass === getpass) {
      alert('Login Success')
      window.location.href = './welcome.html';
  }
  else {
      alert('Please check your email & password and register your self!')
       window.location.href = './signup.html';
  }
}
  function logout(){
    localStorage.removeItem('email')
    localStorage.removeItem('pass')
    window.location.href='./index.html';
  }