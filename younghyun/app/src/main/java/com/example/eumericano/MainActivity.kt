package com.example.eumericano

import android.content.ContentValues
import android.content.Intent
import android.database.sqlite.SQLiteDatabase
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.eumericano.databinding.ActivityMainBinding
import layout.CheckDBHelper
import layout.MainDBHelper
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

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
        checkDBHelper =  CheckDBHelper(this, "TURN_ON_APP.db", null, 1)
        checkDatabase = checkDBHelper.writableDatabase

        val current = LocalDateTime.now()
        val formatter = DateTimeFormatter.ISO_DATE
        val formatted = current.format(formatter)

        var contentValues = ContentValues()
        contentValues.put("date",formatted)

        mainDatabase.insert("TURNED_ON_APP", null, contentValues)
    }

    fun showTimer(v: View) {
        var intent= Intent(this, TimerActivity::class.java)
        startActivity(intent)
    }



}