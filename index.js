var xplteleinfo = require("./lib/xpl-teleinfo");
var schema_teleinfobasic = require('/etc/wiseflat/schemas/teleinfo.basic.json');
var schema_teleinfoconfig = require('/etc/wiseflat/schemas/teleinfo.config.json');

var wt = new xplteleinfo(null, {
	xplLog: false,
	forceBodySchemaValidation: false
});

wt.init(function(error, xpl) { 

	if (error) {
		console.error(error);
		return;
	}

	xpl.addBodySchema(schema_teleinfobasic.id, schema_teleinfobasic.definitions.body);
	xpl.addBodySchema(schema_teleinfoconfig.id, schema_teleinfoconfig.definitions.body);
	
        // Load config file into hash
        wt.readConfig();
        
        // Send every minutes an xPL status message 
        setInterval(function(){
                wt.sendConfig();
        }, 60 * 1000);
	
        xpl.on("xpl:teleinfo.basic", function(evt) {
		if(wt.configHash.enable) wt.validBasicSchema(evt.body);
        });
});