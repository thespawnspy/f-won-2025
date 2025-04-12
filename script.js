document.getElementById("predictionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbzvIqh146JgpQYxexZD0jRlsn-jpadqIHg_w4Pduvw0a5lzjoQ6Ht3ZAji9kB-mscIH/exec", {
    method: "POST",
    body: new URLSearchParams(formData)
  })
  .then(() => {
    alert("Prediction submitted!");
    form.reset();
  })
  .catch(error => {
    alert("Error submitting prediction. Check console.");
    console.error("Submission error:", error);
  });
});

window.onload = function () {
  const drivers = [
    "Lewis Hamilton (Ferrari)", "Charles Leclerc (Ferrari)", "Max Verstappen (Red Bull)", "Yuki Tsunoda (Red Bull)",
    "George Russell (Mercedes)", "Kimi Antonelli (Mercedes)", "Carlos Sainz (Williams)", "Alexander Albon (Williams)",
    "Lance Stroll (Aston Martin)", "Fernando Alonso (Aston Martin)", "Pierre Gasly (Alpine)", "Jack Doohan (Alpine)",
    "Nico Hülkenberg (Kick Sauber)", "Gabriel Bortoleto (Kick Sauber)", "Esteban Ocon (Haas)", "Oliver Bearman (Haas)",
    "Liam Lawson (Racing Bulls)", "Isaac Hadjar (Racing Bulls)", "Oscar Piastri (McLaren)", "Lando Norris (McLaren)"
  ];

  const dropdownIds = ["winner", "second", "third", "fastest", "retire", "dotd"];

  dropdownIds.forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;

    // Clear existing options just in case
    select.innerHTML = "";

    // Add a proper placeholder
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose your driver";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    // Populate with drivers
    drivers.forEach(driver => {
      const option = document.createElement("option");
      option.value = driver;
      option.textContent = driver;
      select.appendChild(option);
    });
  });

  const safetyCar = document.getElementById("safetycar");
  if (safetyCar) safetyCar.insertAdjacentHTML("afterbegin", `<option value="" selected disabled>Yes / No</option>`);

  const finishers = document.getElementById("finishers");
  if (finishers) finishers.insertAdjacentHTML("afterbegin", `<option value="" selected disabled>Choose total finishers</option>`);

  const margin = document.getElementById("margin");
  if (margin) margin.insertAdjacentHTML("afterbegin", `<option value="" selected disabled>Choose margin</option>`);
};
