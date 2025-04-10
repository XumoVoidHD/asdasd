document.getElementById("mybtn").addEventListener("click", () => button_click("xd"))
const textBox = document.getElementById("userInput").addEventListener("input", write_text)
const heading = document.getElementById("output")

function button_click(text) {
    console.log(text)
}

function copy_text() {
    const text = document.getElementById("userInput2").value
    heading.textContent = text
    console.log(text)
}

function write_text() {
    heading.textContent = document.getElementById("userInput").value
}

function submitForm(e) {
    e.preventDefault();
    heading.textContent = document.getElementById("name").value
    document.getElementById("userForm").reset()
    document.getElementById("name").focus()
}

function toggleGender() {
    const otherInput = document.getElementById("otherGenderBox");
    const otherRadio = document.getElementById("genderOther");

    if (otherRadio.checked) {
        otherInput.style.display = "inline-block"
    }
    else {
        otherInput.style.display = "none"
    }
}

function handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected"

    const skillElement = document.querySelectorAll('.skill:checked')
    // const skills = Array.from(skillElement).map(ep => ep.value)
    const skills = []
    for (let i = 0; i < skillElement.length; i++) {
        if (skillElement[i].checked) {
            skills.push(skillElement[i].value)
        }
    }

    const country = document.getElementById("country").value;
    const bio = document.getElementById("bio").value;

    const result = `
    Name: ${name} 
    Password: ${password}
    Email: ${email}
    Gender: ${gender}
    Skills: ${skills.join(", ")}
    Country: ${country}
    Bio: ${bio}
        `;

    document.getElementById("output").textContent = result;
}

function addParagraphs() {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear old paragraphs first (optional)
    for (let i = 1; i <= 5; i++) {
        const para = document.createElement("p");
        para.textContent = "Paragraph " + i;
        container.appendChild(para);
    }
}
function removeParagraphs() {
    const container = document.getElementById("container");
    container.innerHTML = ""; // This removes all the child elements
}

function changeColor() {
    document.getElementById("text").style.fontSize = "24px";
    document.getElementById("text").className = "valid"
    console.log(document.getElementById("text").classList.value)
    let x = window.getComputedStyle(document.getElementById("text"));
    console.log(x)
}

function showFruits() {
    const selectedOptions = document.getElementById("fruits").selectedOptions;
    const values = Array.from(selectedOptions).map(opt => opt.value);
    document.getElementById("output").textContent = `You selected: ${values.join(", ")}`;
}