var Utils = require('./utils');
var ColumnSets = require('./columnSets');

var locationSets = [
    {
        "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes"],
        "blocks": [9]
    },
    {
        "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes", "Reykjavik", "Blönduos", "Seydisfjord", "Thorshavn"],
        "blocks": [9, 4]
    },
    {
        "locationsTitle": "Sumburgh Head - Pembroke (01 Jan - 13 Jul)",
        "locations": ["Sumburgh Head", "Stornoway", "Malin Head", "Blacksod Pt.", "Valencia", "Roche's Point", "Birr Castle", "Donaghadee", "Liverpool Obsy.", "Holyhead", "Pembroke"],
        "blocks": [5, 6]
    },

    {
        "locationsTitle": "Sumburgh Head - Pembroke (14 Jul - 31 Dec)",
        "locations": ["Sumburgh Head", "Stornoway", "Castlebay", "Malin Head", "Blacksod Pt.", "Valencia", "Roche's Point", "Birr Castle", "Donaghadee", "Liverpool Obsy.", "Holyhead", "Pembroke"],
        "blocks": [6, 6]
    },
    {
        "locationsTitle": "Scilly - Spurn Head (01 Jan - 03 Aug)",
        "locations": ["Scilly", "Jersey", "Portland Bill", "Dungeness", "Wick", "Nairn", "Aberdeen", "Leith", "North Shields", "Spurn Head"],
        "blocks": [4, 6]
    },
    {
        "locationsTitle": "Scilly - Spurn Head (04 Aug - 31 Dec)",
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

var manifests = Utils.createManifests('1907', locationSets, ColumnSets.ALL);
module.exports = manifests;
