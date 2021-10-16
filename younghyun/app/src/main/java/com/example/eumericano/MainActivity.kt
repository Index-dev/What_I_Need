package com.example.eumericano

import android.content.Intent
import android.database.sqlite.SQLiteDatabase
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.eumericano.databinding.ActivityMainBinding
import layout.CheckDBHelper
import layout.MainDBHelper

class MainActivity : AppCompatActivity() {
    private var mBinding: ActivityMainBinding? = null
    private val binding get() = mBinding!!


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        lateinit var mainDBHelper : MainDBHelper
        lateinit var mainDatabase : SQLiteDatabase
        lateinit var checkDBHelper : CheckDBHelper
        lateinit var checkDatabase : SQLiteDatabase


        mBinding= ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        mainDBHelper =  MainDBHelper(this, "TURN_ON_APP.db", null, 1)
        mainDatabase = mainDBHelper.writableDatabase
        checkDBHelper =  CheckDBHelper(this, "CHECK_TODO.db", null, 1)
        checkDatabase = checkDBHelper.writableDatabase


    }

    fun showTimer(v: View) {
        var intent= Intent(this, TimerActivity::class.java)
        startActivity(intent)
    }



}