module.exports = function(RED) {
  function Coremermaid_state_startFunctionality(config) {
    RED.nodes.createNode(this,config);

    var node = this;
    var cfg = config;

    node.on('close', function() {
      node.status({});
    });

    /* msg handler, in this case pass the message on unchanged */
    node.on("input", function(msg, send, done) {
        // How to send a status update
        node.status({ fill: "green", shape: "ring", text: RED._("mermaid-state-start.label.statusset") });

        // Send a message and how to handle errors.
        try {
          try {
            send(msg);
            done();
          } catch ( err ) {
            // use node.error if the node might send subsequent messages
            node.error("error occurred", { ...msg, error: err })
            done();
          }
        } catch (err) {
          // use done if the node won't send anymore messages for the
          // message it received.
          msg.error = err
          done(err.message, msg)
        }
    });
  }

  RED.nodes.registerType("mermaid-state-start", Coremermaid_state_startFunctionality);

}
