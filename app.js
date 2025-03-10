function sayHello() {
  alert("Hello from Azure!");
}

document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.text();
    document.getElementById("response").innerText = result;
  } catch (error) {
    document.getElementById("response").innerText = "There was an error submitting the form.";
    console.error(error);
  }
});
