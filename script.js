const h1 = document.createElement("h1");

h1.setAttribute("id", "title");

// h1.innerText = "Hello, World!";

document.body.appendChild(h1);

document.getElementById("title").innerText = "Hello, World!"

const p = document.createElement("p");

p.innerText = "Hello, World!";

document.body.appendChild(p);

const text = document.createTextNode("Hello, World!");

p.appendChild(text);

document.body.appendChild(text);

console.log(document.body);

