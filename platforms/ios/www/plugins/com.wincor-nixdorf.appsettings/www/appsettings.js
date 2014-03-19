


cordova.define("com.wincor-nixdorf.appsettings.appsettings", function(require, exports, module) {
    var exec    = require('cordova/exec'),
        utils   = require('cordova/utils'),
        cordova = require('cordova');


    function AppsSettings(){
    }

    AppSettings.prototype.getSettings = function(){
        //window.alert("getAppSettings");
        //if (device.available)
            return cordova.exec(getAppSettingsSucc, getAppSettingsFail, "AppSettings", "getAppSettings",{});
        //return 1;
               ;

    function getAppSettingsSucc(){
    }
               
    function getAppSettingsFail(){
        //_alert(msg);
        //_log(msg);
    }

    AppSettings.prototype.setAppSettings = function(){
        return cordova.exec(null,null, "AppSettings","setAppSettings",{});
               };

    function setAppSettingsResult(){
        //_alert(msg);
        //_log(msg);
    }

    module.exports = new AppSettings();
});