/// <reference path="cordovathings.d.ts"/>
var CC;
(function (CC) {
    var CordovaThings = (function () {
        function CordovaThings() {
        }
        CordovaThings.prototype.getAppVersion = function (successcb, failcb) {
            if (!window.cordova) {
                if (failcb)
                    failcb("no cordova");
                return;
            }
            window.cordova.exec(function (response) {
                successcb(response);
            }, function (err) {
                console.log("getAppVersion call failed with error: " + err);
                if (failcb)
                    failcb(err);
            }, "CordovaThings", "getAppVersion", []);
        };

        CordovaThings.prototype.setKeyValue = function (key, value, successcb, failcb) {
            if (!window.cordova) {
                if (failcb)
                    failcb("no cordova");
                return;
            }
            window.cordova.exec(function (response) {
                successcb();
            }, function (err) {
                console.log("setKeyValue call failed with error: " + err);
                if (failcb)
                    failcb(err);
            }, "CordovaThings", "setKeyValue", [key, value]);
        };
        return CordovaThings;
    })();
    CC.CordovaThings = CordovaThings;
})(CC || (CC = {}));

module.exports = CC;
