package com.example.eumericano

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import com.example.eumericano.databinding.ActivityMainBinding
import com.example.eumericano.databinding.ActivityTimerBinding
import java.util.*
import kotlin.concurrent.timerTask

class TimerActivity: AppCompatActivity() {

    private var tBinding: ActivityTimerBinding? = null
    private val timerBinding get() = tBinding!!

    var timer = Timer()

    var firstHour = 0
    var firstMinute = 0
    var firstSecond = 0
    var isFirstStart = true

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

    fun handleStart(v: View) {
        val timerCountSettingLayer =  timerBinding.timeCountSettingLV
        val timerCountLayer =  timerBinding.timeCountLV
        val timerOption = timerBinding.timerOption

        timerCountSettingLayer.visibility = View.GONE
        timerCountLayer.visibility = View.VISIBLE
        timerOption.visibility = View.VISIBLE

        val hourET = timerBinding.hourET
        val minuteET = timerBinding.minuteET
        val secondET = timerBinding.secondET

        val hourTV = timerBinding.hourTV
        val minuteTV = timerBinding.minuteTV
        val secondTV = timerBinding.secondTV

        var hour = if(hourET.text.toString() != "") Integer.parseInt(hourET.text.toString()) else 0
        var minute = if(minuteET.text.toString() != "") Integer.parseInt(minuteET.text.toString()) else 0
        var second = if(secondET.text.toString() != "") Integer.parseInt(secondET.text.toString()) else 0

        if (isFirstStart) {
            firstHour = hour
            firstMinute = minute
            firstSecond = second
            isFirstStart = false
        }


        if(second <= 9){
            secondTV.text = getString(R.string.textContent,"0${second}")
        } else {
            secondTV.text = second.toString()
        }

        if(minute <= 9){
            minuteTV.text = getString(R.string.textContent,"0${minute}")
        } else {
            minuteTV.text = minute.toString()
        }

        if(hour <= 9){
            hourTV.text = getString(R.string.textContent, "0${hour}")
        } else {
            hourTV.text = hour.toString()
        }

        val run = object : TimerTask(){
            override fun run() {
                // 0초 이상이면
                when {
                    second != 0 -> {
                        //1초씩 감소
                        second--;

                        // 0분 이상이면
                    }
                    minute != 0 -> {
                        // 1분 = 60초
                        second = 60;
                        second--;
                        minute--;

                        // 0시간 이상이면
                    }
                    hour != 0 -> {
                        // 1시간 = 60분
                        second = 60;
                        minute = 60;
                        second--;
                        minute--;
                        hour--;
                    }
                }

                //시, 분, 초가 10이하(한자리수) 라면
                // 숫자 앞에 0을 붙인다 ( 8 -> 08 )
                if(second <= 9){
                    secondTV.text = getString(R.string.textContent,"0${second}")
                } else {
                    secondTV.text = second.toString()
                }

                if(minute <= 9){
                    minuteTV.text = getString(R.string.textContent,"0${minute}")
                } else {
                    minuteTV.text = minute.toString()
                }

                if(hour <= 9){
                    hourTV.text = getString(R.string.textContent, "0${hour}")
                } else {
                    hourTV.text = hour.toString()
                }

                if(hour == 0 && minute == 0 && second == 0) {
                    timer.cancel();//타이머 종료
                    //TODO: 알람설정
                }
            }
        }
        timer.schedule(run, 1000, 1000)

        val startBtn = timerBinding.startBtn

        startBtn.text = "정지"
        startBtn.setOnClickListener(View.OnClickListener {
            startBtn.text = "재시작"
            stop(timer, hourET, minuteET, secondET, startBtn, hourTV, minuteTV, secondTV, v)
        })
    }

    fun stop(exTimer: Timer, hourET:EditText, minuteET:EditText, secondET:EditText,
             startBtn:Button, hourTV: TextView, minuteTV: TextView, secondTV: TextView, v: View) {
        exTimer.cancel()
        hourET.setText(hourTV.text)
        minuteET.setText(minuteTV.text)
        secondET.setText(secondTV.text)
        timer = Timer()
        startBtn.setOnClickListener(View.OnClickListener {
            handleStart(v)
        })
    }

    fun reflesh(v: View) {
        val hourET = timerBinding.hourET
        val minuteET = timerBinding.minuteET
        val secondET = timerBinding.secondET

        val hourTV = timerBinding.hourTV
        val minuteTV = timerBinding.minuteTV
        val secondTV = timerBinding.secondTV

        val startBtn = timerBinding.startBtn

        if(firstSecond <= 9){
            secondTV.text = getString(R.string.textContent,"0${firstSecond}")
        } else {
            secondTV.text = firstSecond.toString()
        }

        if(firstMinute <= 9){
            minuteTV.text = getString(R.string.textContent,"0${firstMinute}")
        } else {
            minuteTV.text = firstMinute.toString()
        }

        if(firstHour <= 9){
            hourTV.text = getString(R.string.textContent, "0${firstHour}")
        } else {
            hourTV.text = firstHour.toString()
        }
        startBtn.text = "시작"
        stop(timer, hourET, minuteET, secondET, startBtn, hourTV, minuteTV, secondTV, startBtn.rootView)
    }

    fun handleComplete(v: View) {

    }
}