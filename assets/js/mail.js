const form = document.getElementById('cs-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fullName = document.querySelector('input[name="full-name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const projectType = document.querySelector('input[name="projectType"]').value;
  const mobile = document.querySelector('input[name="mobile"]').value;
  const projectDetails = document.querySelector('textarea[name="projectDetails"]').value;

  const data = { fullName, email, projectType, mobile, projectDetails };

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      form.reset();
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while sending the message. Please try again later.');
  }
});


form.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    form.requestSubmit();
  }
});