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
                if (successcb)
                    successcb();
            }, function (err) {
                console.log("setKeyValue call failed with error: " + err);
                if (failcb)
                    failcb(err);
            }, "CordovaThings", "setKeyValue", [key, value]);
        };

        CordovaThings.prototype.setStatusBarVisibility = function (action) {
            if (!window.cordova) {
                return;
            }
            window.cordova.exec(function (response) {
            }, function (err) {
                console.log("setStatusBarVisibility call failed with error: " + err);
            }, "CordovaThings", "setStatusBarVisibility", [action]);
        };
        return CordovaThings;
    })();
    CC.CordovaThings = CordovaThings;
})(CC || (CC = {}));

module.exports = CC;
