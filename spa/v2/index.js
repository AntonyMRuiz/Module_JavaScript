let content = document.getElementById("content");

let route = {
    "form" : "./components/form.html",
    "users" : "./components/users.html",
    "about-me" : "./components/about.html"
}

document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", async (event)=>{
        event.preventDefault();

        const pathname = a.href.split("/");        
        
        let data = await fetch(route[pathname[pathname.length - 1]]);
        
        content.innerHTML = await data.text();
    })
})