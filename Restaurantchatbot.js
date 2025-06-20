function bot() {
    const input = document.getElementById("msg");
    const chatbox = document.getElementById("chatbox");
    const msg = input.value.trim().toLowerCase();

    if (msg === "") return;

    chatbox.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;

    let reply = "";

    if (msg.includes("menu")) {
        reply = "Our menu includes pizza, pasta, burgers, and desserts.";
    } else if (msg.includes("timing") || msg.includes("open")) {
        reply = "We are open from 10 AM to 11 PM every day.";
    } else if (msg.includes("location")) {
        reply = "We are located at MG Road, Bangalore.";
    } else if (msg.includes("hi") || msg.includes("hello")) {
        reply = "Hello! Welcome to our restaurant. How can I help you?";
    } else if (msg.includes("book")) {
        reply = "You can book a table by calling +91-9876543210.";
    } else {
        reply = "Sorry, I didn't understand. Try asking about menu, timing, or location.";
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
