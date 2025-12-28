// MODE DEMO (TANPA FIREBASE)
// nanti kalau Firebase aktif, file ini DIGANTI saja

window.fakeAuth = {
  login(email){
    const isAdmin = email === "admin@yass.com";
    localStorage.setItem("user", JSON.stringify({
      email,
      role: isAdmin ? "admin" : "user"
    }));
    return isAdmin;
  },
  logout(){
    localStorage.removeItem("user");
  },
  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
};
