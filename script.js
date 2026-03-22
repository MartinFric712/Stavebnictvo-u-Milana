// MODAL
function openModal(title, description) {
    // Napis kliknutej karty
    document.getElementById("modalTitle").innerText = title;
    // Popis karty
    document.getElementById("modalDesc").innerText = description;

    document.getElementById("serviceModal").style.display = "flex";
}

// Zatvorenie okna
function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}

// Zatvorenie okna kliknutím mimo neho
window.onclick = function (event) {
    var modal = document.getElementById("serviceModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// FORMULAR 
function sendMessage() {
    // Načíta hodnoty z formulára
    var meno = document.getElementById("meno").value;
    var email = document.getElementById("email").value;
    var sprava = document.getElementById("sprava").value;
    // kontrola vyplnenia
    if (meno === "" || email === "" || sprava === "") {
        alert("Prosím, vyplňte všetky polia vo formulári.");
    } else {
        alert("Ďakujeme, " + meno + "! Váš dopyt bol odoslaný. Ozveme sa vám na " + email + ".");
        document.getElementById("meno").value = "";
        document.getElementById("email").value = "";
        document.getElementById("sprava").value = "";
    }
}