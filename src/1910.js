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

/*
 * https://www.zooniverse.org/projects/edh/weather-rescue/talk/1198/683385?comment=1138347
 * As previously:
 *
 * All column sets:
 *
 *      Yarmouth - London
 *      The Scaw - Biarritz
 *
 * The Paris - Azores group has the following changes:
 *
 *   i) On 6th March Madeira (Funchal) is added to the end of the group.
 *   ii) On 1st August, Gibraltar is added between Lisbon and Azores (P. Delgada).
 *
 * Only two subject sets have been setup for this group: Paris - Azores (1st Jan - 5th Mar) and Paris - Mardeira (6th Mar - 31st Dec).
 * Since the latter set gains another station in August, we can't easily include it in WRT.
 * Therefore, we will just include:
 *
 * All column sets:
 *      Paris - Azores
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
    "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes", "Isafjord", "Reykjavik", "Seydisfjord", "Thorshavn"],
    "blocks": [9, 4]
};

var manifests = Utils.createManifests('1910', locationSets, ColumnSets.ALL);

manifests = manifests.concat(Utils.createManifests('1910', [HaparandaThorshavn], [ColumnSets.PRESSURE_TEMP, ColumnSets.PRESSURE_DRY_WET]));

manifests = manifests.concat(Utils.createManifests('1910', [HaparandaSkudesnaes], [ColumnSets.MAX_MIN_RAINFALL]));

module.exports = manifests;
