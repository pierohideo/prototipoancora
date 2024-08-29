const users = [
    { username: "admin", password: "adminpass", role: "admin" },
    { username: "warehouse", password: "warehousepass", role: "warehouse" },
    { username: "hr", password: "hrpass", role: "hr" }
];

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to the dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }

    return false; // Prevent form submission
}
