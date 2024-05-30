// console.log("¡Conectado!");

// // JS - Form
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("serviceForm");
//     const messageContainer = document.getElementById("messageContainer");

//     loadFromLocalStorage();

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         if (validateForm()) {
//             const formData = {
//                 name: document.getElementById("name").value,
//                 email: document.getElementById("email").value,
//                 phone: document.getElementById("phone").value,
//                 address: document.getElementById("address").value,
//                 product: document.getElementById("product").value,
//                 brand: document.querySelector('input[name="brand"]:checked').value,
//                 issue: document.getElementById("issue").value
//             };

//             saveToLocalStorage(formData);

//             showMessage("Solicitud almacenada. ¡Gracias!", "success");
//         } else {
//             showMessage("Por favor, completa todos los campos correctamente.", "error");
//         }
//     });

//     function loadFromLocalStorage() {
//         const storedData = JSON.parse(localStorage.getItem("serviceRequest"));

//         if (storedData) {
//             document.getElementById("name").value = storedData.name || "";
//             document.getElementById("email").value = storedData.email || "";
//             document.getElementById("phone").value = storedData.phone || "";
//             document.getElementById("address").value = storedData.address || "";
//             document.getElementById("product").value = storedData.product || "";
//             const brandRadio = document.querySelector(`input[name="brand"][value="${storedData.brand}"]`);
//             if (brandRadio) {
//                 brandRadio.checked = true;
//             }
//             document.getElementById("issue").value = storedData.issue || "";
//         }
//     }

//     function saveToLocalStorage(data) {
//         localStorage.setItem("serviceRequest", JSON.stringify(data));
//     }

//     function validateForm() {
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const phone = document.getElementById("phone").value;
//         const address = document.getElementById("address").value;
//         const product = document.getElementById("product").value;
//         const brand = document.querySelector('input[name="brand"]:checked');
//         const issue = document.getElementById("issue").value;

//         return name && email && phone && address && product && brand && issue;
//     }

//     function showMessage(message, type) {
//         const messageElement = document.createElement("div");
//         messageElement.className = `message ${type}`;
//         messageElement.textContent = message;

//         messageContainer.innerHTML = "";
//         messageContainer.appendChild(messageElement);

//         setTimeout(() => {
//             messageContainer.innerHTML = "";
//         }, 10000);
//     }
// });
