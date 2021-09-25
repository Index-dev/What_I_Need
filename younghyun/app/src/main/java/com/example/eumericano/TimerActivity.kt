package com.example.eumericano

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.eumericano.databinding.ActivityMainBinding
import com.example.eumericano.databinding.ActivityTimerBinding

class TimerActivity: AppCompatActivity() {

    private var tBinding: ActivityTimerBinding? = null
    private val timerBinding get() = tBinding!!


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        tBinding= ActivityTimerBinding.inflate(layoutInflater)
        setContentView(timerBinding.root)

        val timerCountSettingLayer =  timerBinding.timeCountSettingLV
        val timerCountLayer =  timerBinding.timeCountLV

        val hourET = timerBinding.hourET
        val minuteET = timerBinding.minuteET
        val secondET = timerBinding.secondET

        val hourTV = timerBinding.hourTV
        val minuteTV = timerBinding.minuteTV
        val secondTV = timerBinding.secondTV


    }

    fun handleComplete(v: View) {

    }
}