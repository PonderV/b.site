// ============================================
// home.js – Home Page JavaScript
// Koenigsegg CCXR Fan Site
// ============================================

// ── 1. VARIABLES & MATH ──────────────────────
// Declare variables for the car's base price and tax, then calculate total.
var basePrice = 4800000;
var taxRate = 0.17;
var totalPrice = basePrice + (basePrice * taxRate);

// ── 2. innerHTML – Write to the page ─────────
// Finds the element with id="priceDisplay" and writes the price into it.
function showPrice() {
    document.getElementById("priceDisplay").innerHTML =
        "Starting price with tax: $" + totalPrice;
}

showPrice();

// ── 3. PASSWORD – Show hidden section ────────
// The correct password needed to unlock the VIP section.
var correctPassword = "ccxr1004";

function checkPassword() {
    // prompt() opens a dialog and returns what the user typed.
    var userInput = prompt("Enter the password to unlock the VIP section:");

    if (userInput == correctPassword) {
        document.getElementById("vipSection").style.display = "block";
        alert("Access granted! Welcome to the VIP section.");
    } else {
        alert("Wrong password. Access denied.");
    }
}

// ── 4. ARRAY & FOR LOOP ──────────────────────
// An array holding 3 Koenigsegg model names.
var carModels = ["Koenigsegg CCXR", "Koenigsegg Agera RS", "Koenigsegg Jesko"];

// Loops through the array and writes each model name to the page.
function showCarModels() {
    var output = "Our favourite Koenigsegg models:<br>";

    for (var i = 0; i < carModels.length; i++) {
        output = output + (i + 1) + ". " + carModels[i] + "<br>";
    }

    document.getElementById("modelsList").innerHTML = output;
}

showCarModels();