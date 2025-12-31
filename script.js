// Welcome button alert
function showAlert() {
    alert("Welcome to my SEN 313 personal profile website!");
}

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let response = document.getElementById("response");

    response.textContent = "Thank you, " + name + "! Your message has been received.";
    response.style.color = "green";

    // Clear form
    this.reset();
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
