var expressWs = require('express-ws')(global.app, global.server);
let wses = [];
app.ws('/ws/custom', function(ws, req) {
    wses.push(ws);
    console.log("Websocket connected.");
    ws.on('close', function(msg) {
        for (let i = 0;i < wses.length;i++)
            if (wses[i] == ws)
            {
                wses.splice(i--,1);
                console.log("closed");
            }
    });
});
global.wsBroadcast = function(s){
    for (let ws of wses)
    try {
        ws.send(s);
    } catch(err) {
        console.trace(err);
    }
}