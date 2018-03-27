var Utils = require('./utils');
var ColumnSets = require('./columnSets');

/* https://www.zooniverse.org/projects/edh/weather-rescue/talk/1198/586085?comment=973816
 * All column sets:
 *
 *      Sumburgh Head - Pembroke
 *      Scilly - Spurn Head
 *      Yarmouth - London
 *      The Scaw - Biarritz
 *      Paris - Azores (Horta)
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
    },
    {
        "locations": ["Yarmouth", "Clacton-on-Sea", "Nottingham", "Bath", "Oxford", "London"],
        "blocks": [6]
    },
    {
        "locations": ["The Scaw", "Fanö", "Cuxhaven", "The Helder", "Brussels", "Berlin", "Frankfürt", "Munich", "Cape Gris Nez", "Le Hève", "Brest", "Lorient", "Rochefort", "Biarritz"],
        "blocks": [8, 6]
    },
    {
        "locations": ["Paris", "Belfort", "Lyons", "Nice", "Perpignan", "Sanguinaire", "Corunna", "Lisbon", "Azores (P. Delgada)", "Azores (Horta)"],
        "blocks": [6, 4]
    }
];

var HaparandaSkudesnaes = {
    "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes"],
    "blocks": [9]
};

var HaparandaThorshavn = {
    "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes", "Reykjavik", "Blönduos", "Seydisfjord", "Thorshavn"],
    "blocks": [9, 4]
};

var manifests = Utils.createManifests('1908', locationSets, ColumnSets.ALL);

manifests = manifests.concat(Utils.createManifests('1908', [HaparandaThorshavn], [ColumnSets.PRESSURE_TEMP, ColumnSets.PRESSURE_DRY_WET]));

manifests = manifests.concat(Utils.createManifests('1908', [HaparandaSkudesnaes], [ColumnSets.MAX_MIN_RAINFALL]));

module.exports = manifests;
