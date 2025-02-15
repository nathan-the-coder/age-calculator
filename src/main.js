import './style.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import default CSS
import { DateTime } from 'luxon';

// Initialize Flatpickr
flatpickr("#datepicker", {
  dateFormat: "Y-m-d",
  enableTime: false,
});

document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let dateInput = document.getElementById('datepicker').value.trim();
    let birthdate = DateTime.fromISO(dateInput);
    let today = DateTime.now();
    let ageOutput = document.getElementById('age');
    
    // Validate input date
    if (!birthdate.isValid) {
        alert("Invalid birthdate. Please enter a valid date.");
        return;
    }

    if (birthdate > today) {
        alert("Birthdate must be in the past.");
        return;
    }

    let years = today.year - birthdate.year;
    let months = today.month - birthdate.month;

    if (months < 0) {
        years--;
        months += 12;
    }

    let totalMonths = years * 12 + months;

    if (years > 120 || years < 0) {
        alert("Age must be between 0 and 120 years.");
        return;
    }

    ageOutput.innerText = `${years} years, ${totalMonths} months`;
    document.getElementById('output').style.display = 'block';
});

