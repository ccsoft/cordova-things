#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface CordovaThings : CDVPlugin {

}

- (void) getAppVersion:(CDVInvokedUrlCommand*)command;
- (void) setKeyValue:(CDVInvokedUrlCommand*)command;

+ (NSString*) getValueFor:(NSString*)key;

@end
