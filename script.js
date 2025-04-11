document.getElementById("predictionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://script.google.com/macros/s/AKfycbwskciQrBAg0sE6k-Eh07iHDoVgS8sjnxiyKeT7IWoERPkPdCrLxZqvF4UZ7nGt2uMn/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
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

const drivers = [
  "Lewis Hamilton (Ferrari)", "Charles Leclerc (Ferrari)", "Max Verstappen (Red Bull)", "Yuki Tsunoda (Red Bull)",
  "George Russell (Mercedes)", "Kimi Antonelli (Mercedes)", "Carlos Sainz (Williams)", "Alexander Albon (Williams)",
  "Lance Stroll (Aston Martin)", "Fernando Alonso (Aston Martin)", "Pierre Gasly (Alpine)", "Jack Doohan (Alpine)",
  "Nico Hülkenberg (Kick Sauber)", "Gabriel Bortoleto (Kick Sauber)", "Esteban Ocon (Haas)", "Oliver Bearman (Haas)",
  "Liam Lawson (Racing Bulls)", "Isaac Hadjar (Racing Bulls)", "Oscar Piastri (McLaren)", "Lando Norris (McLaren)"
];

const fieldIds = ["pole", "winner", "second", "third", "fastest", "retire", "dotd"];
fieldIds.forEach(id => {
  const select = document.getElementById(id);
  drivers.forEach(driver => {
    const option = document.createElement("option");
    option.value = driver;
    option.textContent = driver;
    select.appendChild(option);
  });
});
