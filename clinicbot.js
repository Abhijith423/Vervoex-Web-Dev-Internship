function bot() {
    const input = document.getElementById("msg");
    const chatbox = document.getElementById("chatbox");
    const msg = input.value.trim().toLowerCase();

    if (msg === "") return;

    chatbox.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;

    let reply = "";

    if (msg.includes("greetings")) {
        reply = "Hello! Welcome to CityCare Clinic. How can I help you?";
    } else if (msg.includes("clinic hours") || msg.includes("open")) {
        reply = "We are open from 9 AM to 6 PM, Monday to Saturday.";
    } else if (msg.includes("doctors available")) {
        reply = "Dr.Smith (General), Dr.John (Dentist), Dr.Anne (Pediatrician)";
    } else if (msg.includes("book appointment") || msg.includes("appointment")) {
        reply = "Sure! Please enter the doctor name and preferred time slot";
    } else if (msg.includes("location")) {
        reply = "We are located at 123 Health Street, near City Mall.";
    } else if (msg.includes("contact number")) {
        reply = "You can contact us at +91-9876543210.";
    } else if (msg.includes("emergency")) {
        reply = "Please call 112 or go to the nearest hospital immediately.";
    } else if (msg.includes("farewells")) {
        reply = "Take Care! Thank you for contacting CityCare Clinic.";
    } else {
        reply = "I'm sorry, I didn't understand that. Can you please rephrase?";
    }

    chatbox.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;

    input.value = "";
}

window.onload = function () {
    document.getElementById("sendBtn").addEventListener("click", bot);

    document.getElementById("msg").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            bot();
        }
    });
};
