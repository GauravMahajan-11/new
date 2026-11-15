
// FORM VALIDATION

document.getElementById("myForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value.trim();
    let gender = document.getElementById("gender").value;

    let valid = true;

    // Clear previous errors
    document.querySelectorAll("span").forEach(function (s) {
        s.innerHTML = "";
    });

    if (name === "") {
        document.getElementById("nameError").innerHTML =
            "Name is required";
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 6 characters";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
            "Enter 10 digit mobile number";
        valid = false;
    }

    if (gender === "") {
        document.getElementById("genderError").innerHTML =
            "Please select gender";
        valid = false;
    }

    if (valid) {
        document.getElementById("message").innerHTML =
            "Registration Successful!";

        this.reset();
    }

});


// THEME SWITCHING

function changeTheme() {
    document.body.classList.toggle("dark");
}


// SHOW / HIDE TEXT

function showText() {
    let text = document.getElementById("hiddenText");
    let btn = document.getElementsByTagName("button")[2];

    if (text.style.display === "none") {
        text.style.display = "block";
        btn.innerHTML = "Hide Text";
    } else {
        text.style.display = "none";
        btn.innerHTML = "Show Hidden Text";
    }
}

// TEXT FORMATTING

function changeText() {
    let heading = document.getElementById("heading");

    if (heading.style.color == "black") {

        heading.style.color = "red";
        heading.style.fontSize = "30px";
        heading.style.fontWeight = "bold";
    }
    else {
        heading.style.color = "black";
        heading.style.fontSize = "20px";
        heading.style.fontWeight = "normal";
    }
}


// COUNTDOWN TIMER

function startTimer() {

    let count = 10;

    let timer = setInterval(function () {

        document.getElementById("timer").innerHTML = count;

        count--;

        if (count < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML =
                "Time Up!";
        }

    }, 1000);
}
