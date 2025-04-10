document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plan").value;
  
    if (!/^[\w.-]+@vitstudent\.ac\.in$/.test(email)) {
      alert("Email must be of the format user@vitstudent.ac.in");
      return;
    }
  
    alert(`Successfully subscribed to ${plan} updates!`);
  });
  