var xplteleinfo = require("./lib/xpl-teleinfo");
var schema_teleinfobasic = require('/etc/wiseflat/schemas/teleinfo.basic.json');

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

        xpl.on("xpl:teleinfo.basic", function(evt) {
		//console.log(evt);
                wt.validBasicSchema(evt.body);
        });
});