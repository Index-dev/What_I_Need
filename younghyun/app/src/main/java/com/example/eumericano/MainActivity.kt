package com.example.eumericano

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.eumericano.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private var mBinding: ActivityMainBinding? = null
    private val binding get() = mBinding!!

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mBinding= ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }

    fun showTimer(v: View) {
        var intent= Intent(this, TimerActivity::class.java)
        startActivity(intent)
    }

}