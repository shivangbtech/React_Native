package com.reacttestproject;

import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reacttestproject.openNativeActivity.ContextProvider;
import com.reacttestproject.openNativeActivity.RCCPackage;

import java.util.Arrays;
import java.util.List;

public class RNDrawerActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactTestDrawer";
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
        );
    }

    @Override
    protected String getJSMainModuleName() {
//        return "android/drawer_js/index.android";
        return "android/drawer_js/index.android";

    }


    @Override
    public void onBackPressed() {
        finish();
        super.onBackPressed();
    }

    @Override
    protected void onResume() {
        Log.v("Tag", "onResume");
//        ContextProvider.setActivityContext(this);
        super.onResume();
    }

    @Override
    protected void onPause() {
        Log.v("Tag", "onPause");
//        ContextProvider.clearActivityContext();
        super.onPause();
    }
}
