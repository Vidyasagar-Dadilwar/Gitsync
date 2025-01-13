document.addEventListener("DOMContentLoaded", () => {
  // Download buttons
  const downloadButtons = document.querySelectorAll(".cta-button");
  downloadButtons.forEach((button) => {
    button.addEventListener("click", downloadExtension);
  });

  // Feedback form submission
  const feedbackForm = document.getElementById("feedback-form");
  feedbackForm.addEventListener("submit", handleFeedbackSubmission);

  // Chat widget
  const chatToggle = document.getElementById("chat-toggle");
  const chatContent = document.getElementById("chat-content");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");
  const chatMessages = document.getElementById("chat-messages");

  chatToggle.addEventListener("click", toggleChat);
  chatSend.addEventListener("click", sendChatMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendChatMessage();
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
});

function downloadExtension() {
  const zipFileUrl =
    "https://drive.google.com/file/d/1D0PTv3O2tKKsCV2LTgFWA4_C7jOikz5z/view?usp=sharing ";

  // Create a temporary anchor element
  const downloadLink = document.createElement("a");
  downloadLink.href = zipFileUrl;
  downloadLink.download = "GitSync.zip";

  // Append to the body, click programmatically, and remove
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Show installation instructions
  showInstallationInstructions();
}

function showInstallationInstructions() {
  const instructions = `
        <h2>Installation Instructions:</h2>
        <ol>
            <li>Unzip the downloaded file.</li>
            <li>Open Google Chrome and navigate to chrome://extensions/</li>
            <li>Enable "Developer mode" in the top right corner.</li>
            <li>Click "Load unpacked" and select the unzipped folder.</li>
            <li>The GitSync extension should now be installed and ready to use!</li>
        </ol>
    `;

  // Create a modal or use an existing element to display the instructions
  const modal = document.createElement("div");
  modal.innerHTML = instructions;
  modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        z-index: 1000;
    `;

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.onclick = () => document.body.removeChild(modal);
  modal.appendChild(closeButton);

  document.body.appendChild(modal);
}

function handleFeedbackSubmission(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  // Here you would typically send the form data to your server
  console.log("Feedback submitted:", Object.fromEntries(formData));
  alert("Thank you for your feedback!");
  e.target.reset();
}

function toggleChat() {
  const chatContent = document.getElementById("chat-content");
  chatContent.style.display =
    chatContent.style.display === "none" ? "block" : "none";
}

function sendChatMessage() {
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");
  const message = chatInput.value.trim();
  if (message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = `You: ${message}`;
    chatMessages.appendChild(messageElement);
    chatInput.value = "";
    // Here you would typically send the message to your chat server
    // and handle the response
    setTimeout(() => {
      const responseElement = document.createElement("p");
      responseElement.textContent = `GitSync Support: Thanks for your message! How can I assist you today?`;
      chatMessages.appendChild(responseElement);
    }, 1000);
  }
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Add scroll animations
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(
    ".feature-card, .step, .installation-steps li"
  );
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      el.classList.add("animate-fade-in");
    }
  });
});

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // btn.value = "Sending...";

  const serviceID = "service_vbgj5wi";
  const templateID = "template_6kf939j";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      // btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      // btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});