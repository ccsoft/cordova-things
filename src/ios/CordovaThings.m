#import "CordovaThings.h"
#import <Cordova/CDV.h>

static NSMutableDictionary *CordovaThingsDictionary;

@implementation CordovaThings

- (void)getAppVersion:(CDVInvokedUrlCommand*)command
{
    NSString* version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
    
	CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:version];
    [self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];	
}

- (void)setKeyValue:(CDVInvokedUrlCommand *)command
{
    if (CordovaThingsDictionary == nil) {
        CordovaThingsDictionary = [[NSMutableDictionary alloc] init];
    }
    
    NSString* key = [command argumentAtIndex:0];
    NSString* value = [command argumentAtIndex:1];
    [CordovaThingsDictionary setValue:value forKey:key];
	CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@""];
    [self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];
}

+ (NSString*)getValueFor:(NSString *)key
{
    if (CordovaThingsDictionary == nil) return nil;
    return [CordovaThingsDictionary valueForKey:key];
}

@end
