function loginEmail(){
  const email = document.getElementById("email").value;
  if(!email) return alert("Isi email");

  const isAdmin = fakeAuth.login(email);

  if(isAdmin){
    location.href = "admin/dashboard.html";
  }else{
    alert("Login berhasil");
    location.href = "index.html";
  }
}

function loginGoogle(){
  // DEMO
  const isAdmin = fakeAuth.login("admin@yass.com");
  location.href = "admin/dashboard.html";
}
function loginSuccess(user){
  localStorage.setItem("userLogin", JSON.stringify(user));
  window.location.href = "index.html";
}

