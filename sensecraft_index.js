
 module.exports = function (RED) {
    function setSensecraftData (config) {
        RED.nodes.createNode(this, config)
    }

    RED.nodes.registerType('sensecraft_index', setSensecraftData);
}
