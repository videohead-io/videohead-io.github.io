document.getElementById("demo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const url = document.getElementById("demo-url").value;
  const email = document.getElementById("demo-email").value;

  window.location.href = `http://app.videohead.io/demo?url=${encodeURIComponent(url)}&email=${encodeURIComponent(email)}`;
});