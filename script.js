function submitForm(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const body =
    "Name: " + name +
    "\nPhone: " + phone +
    "\nMessage:\n" + message;

  const mail = `mailto:info@shreenarayana.example?subject=Estimate Request&body=${encodeURIComponent(body)}`;

  window.location.href = mail;
  alert("Mail app open ho jayega. Agar nahi khulta to manually mail bhej dijiyega.");

  return false;
}
