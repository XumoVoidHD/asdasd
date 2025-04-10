const passwordInput = document.getElementById("password");

const lengthItem = document.getElementById("length");
const uppercaseItem = document.getElementById("uppercase");
const numberItem = document.getElementById("number");
const specialItem = document.getElementById("special");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    // Check each condition and update text + class
    if (password.length >= 6) {
        lengthItem.className = "valid";
        lengthItem.textContent = "✅ At least 6 characters";
    } else {
        lengthItem.className = "invalid";
        lengthItem.textContent = "❌ At least 6 characters";
    }

    if (/[A-Z]/.test(password)) {
        uppercaseItem.className = "valid";
        uppercaseItem.textContent = "✅ At least one uppercase letter";
    } else {
        uppercaseItem.className = "invalid";
        uppercaseItem.textContent = "❌ At least one uppercase letter";
    }

    if (/\d/.test(password)) {
        numberItem.className = "valid";
        numberItem.textContent = "✅ At least one number";
    } else {
        numberItem.className = "invalid";
        numberItem.textContent = "❌ At least one number";
    }

    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
        specialItem.className = "valid";
        specialItem.textContent = "✅ At least one special character";
    } else {
        specialItem.className = "invalid";
        specialItem.textContent = "❌ At least one special character";
    }
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();
    const message = document.getElementById("message");

    const validLength = password.length >= 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);

    if (name.length > 10) {
        message.textContent = "❌ Name must not exceed 10 characters.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "❌ Enter a valid email.";
        message.style.color = "red";
        return;
    }

    if (!validLength || !hasUppercase || !hasNumber || !hasSpecialChar) {
        message.textContent = "❌ Password is incorrect. Please meet all the listed requirements.";
        message.style.color = "red";
        return;
    }

    message.textContent = `✅ Registered successfully, ${name}!`;
    message.style.color = "green";
    document.getElementById("registerForm").reset();

    // Reset password rules
    lengthItem.className = "invalid";
    lengthItem.textContent = "❌ At least 6 characters";

    uppercaseItem.className = "invalid";
    uppercaseItem.textContent = "❌ At least one uppercase letter";

    numberItem.className = "invalid";
    numberItem.textContent = "❌ At least one number";

    specialItem.className = "invalid";
    specialItem.textContent = "❌ At least one special character";
});
