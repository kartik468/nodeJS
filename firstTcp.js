var net = require("net");

var tcpServer = net.createServer(function(socket) {
    console.log("connection established..");
    socket.on("end", function() {
        console.log("server disconnected");
    });
    socket.on("data", function(data) {
        console.log("data received from tcp client: " + data);
        socket.write("server reply: " + data);
        socket.write("");
    });
});

tcpServer.listen(8022, function() {
    console.log("server started listening...");
});
