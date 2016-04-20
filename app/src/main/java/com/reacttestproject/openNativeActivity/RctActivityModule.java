package com.reacttestproject.openNativeActivity;

import android.app.Activity;
import android.content.Intent;
import android.widget.Button;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reacttestproject.NativeActivity;

/**
 * Created by Shivang Goel on 15/3/16.
 */
public class RctActivityModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "RctActivityModule";
//    ReactApplicationContext ContextProvider;

    public RctActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
//        ContextProvider = reactContext;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    @SuppressWarnings("unused")
    public void startActivity(String extraParam) {
        Activity context = ContextProvider.getActivityContext();
        if (context != null && !context.isFinishing()) {
            Intent rctActivityIntent = new Intent(context, NativeActivity.class);
//            rctActivityIntent.putExtra(RctActivity.EXTRA_PARAM, extraParam);
            context.startActivity(rctActivityIntent);
        }
    }


}
