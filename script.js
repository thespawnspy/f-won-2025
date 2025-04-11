document.getElementById("predictionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbwskciQrBAg0sE6k-Eh07iHDoVgS8sjnxiyKeT7IWoERPkPdCrLxZqvF4UZ7nGt2uMn/exec", {
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
