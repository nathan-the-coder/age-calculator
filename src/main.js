import './style.css'
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import default CSS

// Initialize Flatpickr
flatpickr("#datepicker", {
  dateFormat: "Y-m-d",
  enableTime: false,
});
