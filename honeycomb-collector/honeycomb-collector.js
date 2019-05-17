let libHoney = require("libhoney");

module.exports = function(RED) {
    function HoneycombCollector(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;
        var myMessage = null;



        /**
         * Only the token property is required.
         */
        this.myDataset = config.dataset.toString();
        this.myWriteKey = config.writeKey.toString();

        var config = {
            writeKey: this.myWriteKey,
            dataset: this.myDataset
        };

        let HC = new libHoney(config);

        this.on('input', function(msg) {

            // Attempt to convert msg.payload to a json structure.
            try{
                myMessage = JSON.parse(msg)
            }
            catch(err){
                myMessage = msg
            }

            let event = HC.newEvent()
            event.add(myMessage.payload);
            event.send()
        });
    }
    RED.nodes.registerType("honeycomb-collector",HoneycombCollector);
};
