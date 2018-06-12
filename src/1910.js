var Utils = require('./utils');
var ColumnSets = require('./columnSets');

/*
 * First half of 1910
 * All column sets:
 *
 *      Sumburgh Head - Pembroke
 *      Scilly - Spurn Head
 *
 *  Pressure Temp, Pressure Dry Wet:
 *
 *      Haparanda - Thorshavn
 *
 * Max Min Rainfall:
 *
 *      Haparanda - Skudesnaes
*/ 

var locationSets = [
    {
        "locations": ["Sumburgh Head", "Stornoway", "Castlebay", "Malin Head", "Blacksod Pt.", "Valencia", "Roche's Point", "Birr Castle", "Donaghadee", "Liverpool Obsy.", "Holyhead", "Pembroke"],
        "blocks": [6, 6]
    },
    {
        "locations": ["Scilly", "Jersey", "Portland Bill", "Dungeness", "Dover", "Wick", "Nairn", "Aberdeen", "Leith", "North Shields", "Spurn Head"],
        "blocks": [5, 6]
    }
];

var HaparandaSkudesnaes = {
    "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes"],
    "blocks": [9]
};

var HaparandaThorshavn = {
    "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes", "Isafjord", "Reykjavik", "Seydisfjord", "Thorshavn"],
    "blocks": [9, 4]
};

var manifests = Utils.createManifests('1910', locationSets, ColumnSets.ALL);

manifests = manifests.concat(Utils.createManifests('1910', [HaparandaThorshavn], [ColumnSets.PRESSURE_TEMP, ColumnSets.PRESSURE_DRY_WET]));

manifests = manifests.concat(Utils.createManifests('1910', [HaparandaSkudesnaes], [ColumnSets.MAX_MIN_RAINFALL]));

module.exports = manifests;
