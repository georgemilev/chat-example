"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.on("ReceiveDate", (message) => {
    var li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messagesList").appendChild(li);
});

connection.on("ReceiveMemberJoined", (message) => {
    var li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
    connection
        .invoke("MemberJoined")
        .catch(err => console.error(err));
}).catch(function (err) {
    return console.error(err);
});

document.getElementById("sendButton").addEventListener("click", function (event) {

    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;

    if (message.indexOf("getDate") != -1) {
        connection
            .invoke("GetDate")
            .then(() => {
                document.getElementById("userInput").value = "";
                document.getElementById("messageInput").value = "";
            })
            .catch(err => console.error(err));
    }
    else {
        connection
            .invoke("SendMessage", user, message)
            .then(() => {
                document.getElementById("userInput").value = "";
                document.getElementById("messageInput").value = "";
            })
            .catch(err => console.error(err));
    }

    event.preventDefault();
});