package com.ccsoft.plugin;

import java.util.Dictionary;
import java.util.Hashtable;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager.NameNotFoundException;
import android.util.Log;

public class CordovaThings extends CordovaPlugin {
	
	private final String TAG = "CordovaThings";
	
	private static Dictionary<String, String> keyValueStore = new Hashtable<String, String>();
	
	public static String getValueForKey(String key) {
		return keyValueStore.get(key);
	}
	
    @Override
    public boolean execute(String action, JSONArray args,
			final CallbackContext callbackContext) throws JSONException {
    	Log.i(TAG, "action:" + action);

    	if (action.equals("getAppVersion")) {
    		PackageInfo pInfo;
			try {
				pInfo = cordova.getActivity().getPackageManager().getPackageInfo(cordova.getActivity().getPackageName(), 0);
				callbackContext.success(pInfo.versionName);
			} catch (NameNotFoundException e) {
				e.printStackTrace();
				callbackContext.error("exception");
			}
			
			return true;
    	}
    	
    	if (action.equals("setKeyValue")) {
    		if(args.length() >= 2) { 
    			keyValueStore.put(args.getString(0), args.getString(1));
				callbackContext.success("");
				return true;
			}
    	}
    	
        return false;
    }
}