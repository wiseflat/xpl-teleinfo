var xplteleinfo = require("./lib/xpl-teleinfo");

var wt = new xplteleinfo(null, {
	xplLog: false,
	forceBodySchemaValidation: false
});

wt.init(function(error, xpl) { 

	if (error) {
		console.error(error);
		return;
	}

        xpl.on("xpl:teleinfo.basic", function(evt) {
		//console.log(evt);
                wt.validBasicSchema(evt.body);
        });
});