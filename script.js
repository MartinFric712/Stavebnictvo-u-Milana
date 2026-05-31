// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// MODAL
function openModal(title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = description;
    document.getElementById("serviceModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
    document.body.style.overflow = "";
}

window.onclick = function(event) {
    var modal = document.getElementById("serviceModal");
    if (event.target === modal) closeModal();
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

// FORM
function sendMessage() {
    var meno = document.getElementById("meno").value.trim();
    var email = document.getElementById("email").value.trim();
    var sprava = document.getElementById("sprava").value.trim();

    if (!meno || !email || !sprava) {
        alert("Prosím, vyplňte všetky polia vo formulári.");
        return;
    }

    alert("Ďakujeme, " + meno + "! Váš dopyt bol odoslaný. Ozveme sa vám na " + email + ".");
    document.getElementById("meno").value = "";
    document.getElementById("email").value = "";
    document.getElementById("sprava").value = "";
}
