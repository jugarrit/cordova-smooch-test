cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-smooch.Smooch",
        "file": "plugins/cordova-plugin-smooch/www/js/smooch-cordova.js",
        "pluginId": "cordova-plugin-smooch",
        "clobbers": [
            "Smooch"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-smooch": "1.3.1"
};
// BOTTOM OF METADATA
});