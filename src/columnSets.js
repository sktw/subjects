var Utils = require('./utils');

var PRESSURE_TEMP = Utils.addColumnsTitle([Utils.LOCATION, Utils.PRESSURE, Utils.TEMPERATURE]);
var PRESSURE_DRY_WET = Utils.addColumnsTitle([Utils.LOCATION, Utils.PRESSURE, Utils.IGNORE, Utils.DRY, Utils.WET]);
var MAX_MIN_RAINFALL = Utils.addColumnsTitle([Utils.LOCATION, Utils.MAX, Utils.MIN, Utils.IGNORE, Utils.IGNORE, Utils.RAINFALL]);

var ALL = [PRESSURE_TEMP, PRESSURE_DRY_WET, MAX_MIN_RAINFALL];

exports.PRESSURE_TEMP = PRESSURE_TEMP;
exports.PRESSURE_DRY_WET = PRESSURE_DRY_WET;
exports.MAX_MIN_RAINFALL = MAX_MIN_RAINFALL;
exports.ALL = ALL;
