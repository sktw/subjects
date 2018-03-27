var Utils = require('./utils');
var ColumnSets = require('./columnSets');

var locationSets = [
    {
        "locations": ["Haparanda", "Hernösand", "Stockholm", "Wisby", "Karlstad", "Færder", "Bodö", "Christiansund", "Skudesnaes"],
        "blocks": [9]
    },
    {
        "locations": ["Sumburgh Head", "Stornoway", "Malin Head", "Blacksod Pt.", "Valencia", "Roche's Point", "Birr Castle", "Donaghadee", "Liverpool Obsy.", "Holyhead", "Pembroke"],
        "blocks": [5, 6]
    },
    {
        "locations": ["Scilly", "Jersey", "Portland Bill", "Dungeness", "Wick", "Nairn", "Aberdeen", "Leith", "North Shields", "Spurn Head"],
        "blocks": [4, 6]
    },
    {
        "locations": ["Yarmouth", "Clacton-on-Sea", "Nottingham", "Bath", "Oxford", "London"],
        "blocks": [6]
    },
    {
        "locations": ["The Scaw", "Fanö", "Cuxhaven", "The Helder", "Brussels", "Berlin", "Frankfürt", "Munich", "Cape Gris Nez", "Brest", "Lorient", "Rochefort", "Biarritz"],
        "blocks": [8, 5]
    },
    {
        "locations": ["Paris", "Belfort", "Lyons", "Nice", "Perpignan", "Corunna", "Lisbon", "Azores (P. Delgada)", "Azores (Horta)"],
        "blocks": [5, 4]
    }
];

var manifests = Utils.createManifests('1906', locationSets, ColumnSets.ALL);
module.exports = manifests;
