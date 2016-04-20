package com.reacttestproject.openNativeActivity;

import android.app.Activity;

import java.lang.ref.WeakReference;

/**
 * Created by Shivang Goel on 15/3/16.
 */
public class ContextProvider {
    private static WeakReference<Activity> sActivityWR;

    public static void setActivityContext(Activity activity) {
        if (sActivityWR == null) {
            sActivityWR = new WeakReference<>(activity);
        }
    }

    public static Activity getActivityContext() {
        return sActivityWR != null ? sActivityWR.get() : null;
    }

    public static void clearActivityContext() {
        if (sActivityWR != null) {
            sActivityWR.clear();
        }
        sActivityWR = null;
    }
}
