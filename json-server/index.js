let container = document.getElementById("container");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

const url = "http://localhost:3000/users"; // VARIABLE DE ENTORNO


document.addEventListener("DOMContentLoaded", async () => {
    let users = await getData(url);

    users.forEach(user => {
        tbody.innerHTML += `<tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>
                <button class="btn btn-danger">Destroy</button>
            </td>
          </tr>`
    });
})

form.addEventListener("submit", (e) => {

    let name = document.getElementById("nameInput").value;

    sendData(url,{name})

    alert("todo ready")
})

async function getData(url) {
    let data = await fetch(url);
    let users = await data.json();

    return users;
}

async function sendData(url, data) {
   await fetch(url, {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    });
}

