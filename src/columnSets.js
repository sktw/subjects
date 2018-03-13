var Utils = require('./utils');

var columnSets = Utils.addColumnsTitle([
    [Utils.LOCATION, Utils.PRESSURE, Utils.TEMPERATURE],
    [Utils.LOCATION, Utils.PRESSURE, Utils.IGNORE, Utils.DRY, Utils.WET],
    [Utils.LOCATION, Utils.MAX, Utils.MIN, Utils.IGNORE, Utils.IGNORE, Utils.RAINFALL]
]);

module.exports = columnSets;
