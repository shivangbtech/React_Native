package com.reacttestproject;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reacttestproject.openNativeActivity.ContextProvider;
import com.reacttestproject.openNativeActivity.RCCPackage;

import java.util.Arrays;
import java.util.List;

public class MainReactNativeActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactTestProject";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage()
//                new MyReactPackage()
//                new RCCPackage()
        );
    }

    @Override
    protected String getJSMainModuleName() {
        return "android/index.android";
//        return "android/view_pager/index.android";
//        return "http://ttndcarpool.com/webservices/index.android.js";
    }

    @Override
    public void onBackPressed() {
        finish();
        super.onBackPressed();
    }

    @Override
    protected void onResume() {
        Log.v("Tag", "onResume");
        ContextProvider.setActivityContext(this);
        super.onResume();
    }

    @Override
    protected void onPause() {
        Log.v("Tag", "onPause");
        ContextProvider.clearActivityContext();
        super.onPause();
    }
}
