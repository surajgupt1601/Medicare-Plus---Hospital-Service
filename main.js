// Toggle Appointment Modal (Global)
function toggleAppointmentForm() {
    const modal = document.getElementById('appointment-modal');
    if (modal) {
        modal.classList.toggle('hidden');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    // 🍔 Mobile Menu Toggle
    const menuToggle = document.querySelector('#menu-toggle');
    const mobileDropdown = document.querySelector('#mobile-dropdown');

    function checkViewportAndHideMenu() {
        if (window.innerWidth > 768 && mobileDropdown) {
            mobileDropdown.classList.add('hidden');
        }
    }

    if (mobileDropdown) {
        mobileDropdown.classList.add('hidden');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (mobileDropdown) {
                mobileDropdown.classList.toggle('hidden');
            }
        });

        menuToggle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (mobileDropdown) {
                mobileDropdown.classList.toggle('hidden');
            }
        });
    }

    window.addEventListener('resize', () => {
        checkViewportAndHideMenu();
    });

    checkViewportAndHideMenu();

    // 📧 Contact Form Validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const message = form.querySelector('textarea').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Form Submitted!');
            form.reset();
        });
    }

    // 📅 Appointment Modal Button
    const appointmentBtn = document.querySelector('#book-appointment-btn');
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleAppointmentForm();
        });
    }

    // 🗓️ Appointment Form Validation
    const aForm = document.getElementById('appointmentForm');
    if (aForm) {
        aForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('a-name').value.trim();
            const email = document.getElementById('a-email').value.trim();
            const phone = document.getElementById('a-phone').value.trim();
            const date = document.getElementById('a-date').value;
            const dept = document.getElementById('a-department').value;
            const msg = document.getElementById('a-message').value.trim();

            if (!name || !email || !phone || !date || !dept || !msg) {
                alert("Please fill in all fields.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{10}$/;

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!phoneRegex.test(phone)) {
                alert("Phone number must be 10 digits.");
                return;
            }

            alert("Appointment booked successfully!");
            aForm.reset();
            toggleAppointmentForm();
        });
    }
});
// Doctor Availability Cards
const doctors = [
    { name: "Dr. Anjali Mehta", spec: "Cardiology", time: "10:00 AM – 1:00 PM" },
    { name: "Dr. Vikram Shah", spec: "Neurology", time: "2:00 PM – 5:00 PM" },
    { name: "Dr. Nisha Arora", spec: "Pediatrics", time: "9:00 AM – 12:00 PM" },
    { name: "Dr. Rajat Khanna", spec: "Orthopedics", time: "11:00 AM – 3:00 PM" },
    { name: "Dr. Swati Kapoor", spec: "Dermatology", time: "12:00 PM – 4:00 PM" },
    { name: "Dr. Rahul Verma", spec: "Ophthalmology", time: "1:00 PM – 5:00 PM" },
  ];
  
  const docContainer = document.getElementById('doctor-list');
  const toggleBtn = document.getElementById('toggle-doctors');
  
  let showingAll = false;
  
  function renderDoctors(showAll = false) {
    docContainer.innerHTML = '';
    const limit = showAll ? doctors.length : 3;
    for (let i = 0; i < limit; i++) {
      const doc = doctors[i];
      const card = document.createElement('div');
      card.className = "bg-white rounded-lg shadow-md p-4 text-left";
      card.innerHTML = `
        <h3 class="text-xl font-semibold text-blue-800 mb-2">${doc.name}</h3>
        <p class="text-gray-700 mb-1"><strong>Specialty:</strong> ${doc.spec}</p>
        <p class="text-gray-700"><strong>Available:</strong> ${doc.time}</p>
      `;
      docContainer.appendChild(card);
    }
  }
  
  if (docContainer && toggleBtn) {
    renderDoctors();
  
    toggleBtn.addEventListener('click', () => {
      showingAll = !showingAll;
      renderDoctors(showingAll);
      toggleBtn.textContent = showingAll ? "Show Less" : "Show More";
    });
  }

//   Emergency Modal
  
  function toggleEmergencyModal() {
    const modal = document.getElementById('emergency-modal');
    if (modal) {
      modal.classList.toggle('hidden');
    }
  }
  
  

// Health Tips Carousel

const tips = [
    "Stay hydrated — drink at least 8 glasses of water.",
    "Exercise at least 30 minutes daily.",
    "Get 7-8 hours of sleep every night.",
    "Eat fruits and vegetables regularly.",
    "Take short breaks when working for long hours."
];
let tipIndex = 0;
const tipElement = document.getElementById("tip-carousel");

if (tipElement) {
    function showNextTip() {
        tipElement.textContent = tips[tipIndex];
        tipIndex = (tipIndex + 1) % tips.length;
    }
    showNextTip();
    setInterval(showNextTip, 4000); // change every 4 seconds
}

// Find Nearest Hospital
function findNearestHospital() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const mapsUrl = `https://www.google.com/maps/search/hospital/@${lat},${lon},15z`;
  
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          alert("Location access denied. Please allow location permission or search manually.");
        }
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  }
  
//   video call 
function toggleVideoBooking() {
    const modal = document.getElementById('video-booking-modal');
    if (modal) modal.classList.toggle('hidden');
  }
  
  const videoForm = document.getElementById('videoForm');
  if (videoForm) {
    videoForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('v-name').value.trim();
      const email = document.getElementById('v-email').value.trim();
      const date = document.getElementById('v-date').value;
      const issue = document.getElementById('v-issue').value.trim();
      const confirmation = document.getElementById('video-confirmation');
      const dateDisplay = document.getElementById('v-date-display');
  
      if (!name || !email || !date || !issue) {
        alert("Please fill all the fields.");
        return;
      }
  
      dateDisplay.textContent = date;
      confirmation.classList.remove('hidden');
      videoForm.reset();
    });
  }

// Symptom Checker and result
const diagnosisModal = document.getElementById("ai-modal");
const aiModalResult = document.getElementById("ai-modal-result");

function toggleDiagnosisModal() {
  if (diagnosisModal) {
    diagnosisModal.classList.toggle("hidden");
  }
}

symptomForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const symptoms = symptomInput.value.trim();

  if (!symptoms) {
    alert("Please enter your symptoms.");
    return;
  }

  aiModalResult.textContent = "Processing your symptoms...";
  toggleDiagnosisModal();

  try {
    // const res = await fetch("http://localhost:3000/symptom-check", {
    const res = await fetch("https://medicare-plus-hospital-service.onrender.com/symptom-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms })
    });

    const data = await res.json();
    // aiModalResult.textContent = data.diagnosis;
    aiModalResult.innerHTML = formatDiagnosisResponse(data.diagnosis);
  } catch (err) {
    aiModalResult.textContent = "Something went wrong. Please try again.";
  }

  symptomForm.reset();
});
function formatDiagnosisResponse(text) {
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-800">$1</strong>') // **bold**
      .replace(/\* (.*?)\n/g, '<li>$1</li>') // * bullet points
      .replace(/\n{2,}/g, '</ul><br><ul>') // double line breaks = new list
      .replace(/^Okay, I understand\..*?\n/, '') // Remove starting line
      .replace(/\n/g, '<br>'); // single line break = new line
  
    return `<div class="space-y-4 text-gray-800 leading-relaxed text-left text-base"><ul>${formatted}</ul></div>`;
}  


// Register Service Worker

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./serviceWorker.js')
        .then(reg => console.log('Service Worker Registered:', reg.scope))
        .catch(err => console.log('Service Worker Registration Failed:', err));
    });
  }
  