let container = document.getElementById("container");

container.innerHTML = `<h1> Hola ${localStorage.getItem("user")} </h1>`


localStorage.setItem("user","antony")