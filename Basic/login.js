let form = document.getElementById("form");

let admin = {
    "email":"antony@gmail.com",
    "password": "password"
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    // console.log(form.email.value);
    // console.log(form.password.value);

    if (admin.email == form.email.value  && admin.password == form.password.value) {
        console.log("Logeado");
    } else {
        console.error("acceso denegado");   
    }
})