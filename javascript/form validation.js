<script>
function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Username check
    if (username == "") {
        alert("Username is required");
        return false;
    }

    // Email format check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email");
        return false;
    }

    // Password length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
</script>
