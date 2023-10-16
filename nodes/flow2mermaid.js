module.exports = function (RED) {
  function ConfigFlow2MermaidFunctionality(config) {
    RED.nodes.createNode(this, config)
  }
  RED.nodes.registerType('Flow2MermaidCfg', ConfigFlow2MermaidFunctionality);
}