var Xpl = require('xpl-api');
var os = require('os');
var osu = require('os-utils');

function wt(device, options) {
	options = options || {};
	this._options = options;
        this.configHash = [];
	
	options.xplSource = options.xplSource || "bnz-teleinfo."+os.hostname();

	this.xpl = new Xpl(options);
};

module.exports = wt;

var proto = {
    
        init: function(callback) {
                var self = this;

                self.xpl.bind(function(error) {
                        if (error) {
                                return callback(error);
                        }

                        console.log("XPL is ready");
                        callback(null,  self.xpl);
                });
                
        },

	_log: function() {
		if (!this._configuration.xplLog) {
			return;
		}
                
		console.log.apply(console, arguments);
	},
    
        _sendXplStat: function(body) {
                var self = this;                
                self.xpl.sendXplStat(
                        body,
                        'teleinfo2.basic'
                );
        },
        
        _sendXplTrig: function(body) {
                var self = this;                
                self.xpl.sendXplTrig(
                        body,
                        'teleinfo2.basic'
                );
        },
        
        _sendXplTrigOrStat: function(type, value, json) {
                var self = this;                
		if (typeof this.configHash[type] !== 'undefined' && this.configHash[type] != value) self._sendXplTrig(json);
		//if (typeof this.configHash[type] !== 'undefined' && this.configHash[type] == value) self._sendXplStat(json);
		if (typeof this.configHash[type] == 'undefined') {
			self._sendXplTrig(json);
		}
		this.configHash[type] = value;
        },
	
         validBasicSchema: function(body, callback) {
                var self = this;
                if (typeof(body.adco) !== "string") {
                        return false;
                }
                if (typeof(body.optarif) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "optarif",
                                "current": body.optarif
                        };
			self._sendXplTrigOrStat('optarif', body.optarif, json);
                        
                }
                if (typeof(body.isousc) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "isousc",
                                "current": body.isousc
                            };
                        self._sendXplTrigOrStat('isousc', body.isousc, json);
                }
                if (typeof(body.base) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "base",
                                "current": body.base
                            };
			self._sendXplTrigOrStat('base', body.base, json);
                }
                if (typeof(body.iinst) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "iinst",
                                "current": body.iinst
                            };
			self._sendXplTrigOrStat('iinst', body.iinst, json);
                }
                if (typeof(body.imax) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "imax",
                                "current": body.imax
                            };
			self._sendXplTrigOrStat('imax', body.imax, json);
                }
                if (typeof(body.motdetat) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "motdetat",
                                "current": body.motdetat
                            };
			self._sendXplTrigOrStat('motdetat', body.motdetat, json);
                }
                if (typeof(body.hchc) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "hchc",
                                "current": body.hchc
                            };
			self._sendXplTrigOrStat('hchc', body.hchc, json);
                }
                if (typeof(body.hchp) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "hchp",
                                "current": body.hchp
                            };
			self._sendXplTrigOrStat('hchp', body.hchp, json);
                }
                if (typeof(body.ejphn) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "ejphn",
                                "current": body.ejphn
                            };
			self._sendXplTrigOrStat('ejphn', body.ejphn, json);
                }
                if (typeof(body.ejphpm) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "ejphpm",
                                "current": body.ejphpm
                            };
                        self._sendXplTrigOrStat('ejphpm', body.ejphpm, json);
                }
                if (typeof(body.bbrhcjb) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "bbrhcjb",
                                "current": body.bbrhcjb
                            };
                        self._sendXplTrigOrStat('bbrhcjb', body.bbrhcjb, json);
                }
                if (typeof(body.bbrhpjb) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "bbrhpjb",
                                "current": body.bbrhpjb
                            };
                        self._sendXplTrigOrStat('bbrhpjb', body.bbrhpjb, json);
                }
                if (typeof(body.bbrhcjw) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "bbrhcjw",
                                "current": body.bbrhcjw
                            };
                        self._sendXplTrigOrStat('bbrhcjw', body.bbrhcjw, json);
                }
                if (typeof(body.bbrhpjw) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "bbrhpjw",
                                "current": body.bbrhpjw
                            };
                        self._sendXplTrigOrStat('bbrhpjw', body.bbrhpjw, json);
                }
                if (typeof(body.bbrhcjr) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "bbrhcjr",
                                "current": body.bbrhcjr
                            };
                        self._sendXplTrigOrStat('bbrhcjr', body.bbrhcjr, json);
                }
                if (typeof(body.bbrhpjr) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "bbrhpjr",
                                "current": body.bbrhpjr
                            };
                        self._sendXplTrigOrStat('bbrhpjr', body.bbrhpjr, json);
                }
                if (typeof(body.pejp) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "pejp",
                                "current": body.pejp
                            };
                        self._sendXplTrigOrStat('pejp', body.pejp, json);
                }
                if (typeof(body.ptec) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "ptec",
                                "current": body.ptec
                            };
                        self._sendXplTrigOrStat('ptec', body.ptec, json);
                }
                if (typeof(body.demain) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "demain",
                                "current": body.demain
                            };
                        self._sendXplTrigOrStat('demain', body.demain, json);
                }
                if (typeof(body.adps) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "adps",
                                "current": body.adps
                            };
                        self._sendXplTrigOrStat('adps', body.adps, json);
                }
                if (typeof(body.papp) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "papp",
                                "current": body.papp
                            };
                        self._sendXplTrigOrStat('papp', body.papp, json);
                }
                if (typeof(body.hhphc) == "string") {
                        var json = {
                                "device" : body.adco,
                                "type": "hhphc",
                                "current": body.hhphc
                            };
                        self._sendXplTrigOrStat('hhphc', body.hhphc, json);
                }
                return true;
        }
}


for ( var m in proto) {
	wt.prototype[m] = proto[m];
}
