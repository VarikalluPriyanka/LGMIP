function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("output").style.display = "block";
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-password").textContent = password;
}