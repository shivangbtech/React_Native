package com.reacttestproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class HomeActivity extends AppCompatActivity {

    private Button reactNativeBtn;
    private Button native_btn;
    private Button r_n_drawer_btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        reactNativeBtn = (Button) findViewById(R.id.react_native_btn);
        reactNativeBtn.setOnClickListener(mListener);
        native_btn = (Button) findViewById(R.id.native_btn);
        native_btn.setOnClickListener(mListener);
        r_n_drawer_btn = (Button) findViewById(R.id.r_n_drawer_btn);
        r_n_drawer_btn.setOnClickListener(mListener);

    }

    View.OnClickListener mListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            if(v == reactNativeBtn){
                Intent intent = new Intent(HomeActivity.this, MainReactNativeActivity.class);

                startActivity(intent);
            }else if(v == native_btn){
                Intent intent = new Intent(HomeActivity.this, NativeActivity.class);
                startActivity(intent);
            }else if(v == r_n_drawer_btn){
                Intent intent = new Intent(HomeActivity.this, RNDrawerActivity.class);
                startActivity(intent);
            }
        }
    };

}
