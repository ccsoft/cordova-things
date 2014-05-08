/// <reference path="cordovathings.d.ts"/>

module CC {
    export class CordovaThings implements ICordovaThings {
        getAppVersion(successcb: (version: string) => void, failcb?: (error: string) => void) {
            if (!(<any>window).cordova) {
                if (failcb) failcb("no cordova");
                return;
            }
            (<any>window).cordova.exec(
                (response) => {                    
                    successcb(response);
                },
                (err) => {
                    console.log("getAppVersion call failed with error: " + err);
                    if (failcb) failcb(err);
                }, "CordovaThings", "getAppVersion", []);
        }

        setKeyValue(key, value, successcb?: () => void, failcb?: (err: string) => void) {
            if (!(<any>window).cordova) {
                if (failcb) failcb("no cordova");
                return;
            }
            (<any>window).cordova.exec(
                (response) => {
                    if(successcb) successcb();
                },
                (err) => {
                    console.log("setKeyValue call failed with error: " + err);
                    if (failcb) failcb(err);
                }, "CordovaThings", "setKeyValue", [key, value]);
        }
        
        getKeyValue(key, successcb?: (value: string) => void, failcb?: (err: string) => void) {
            if (!(<any>window).cordova) {
                if (failcb) failcb("no cordova");
                return;
            }
            (<any>window).cordova.exec(
                (response) => {
                    if(successcb) successcb(response);
                },
                (err) => {
                    console.log("getKeyValue call failed with error: " + err);
                    if (failcb) failcb(err);
                }, "CordovaThings", "getKeyValue", [key]);
        } 
    }
}
declare var module;
module.exports = CC;
