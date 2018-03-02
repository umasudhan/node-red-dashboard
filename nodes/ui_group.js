module.exports = function(RED) {

    function GroupNode(config) {
        RED.nodes.createNode(this, config);
        console.log('\n\n\n\n\n\n\nin groupnode create node config is:', config);
        this.config = {
            name: config.name,
            disp: config.disp,
            width: config.width,
            order: config.order,
            tab: config.tab,
            collapse: config.collapse || false
        };
        if (!this.config.hasOwnProperty("disp")) { this.config.disp = true; }
        if (this.config.disp !== false) { this.config.disp = true; }
        if (!this.config.hasOwnProperty("collapse")) { this.config.collapse = false; }
    }

    RED.nodes.registerType("mui_group", GroupNode);
};
