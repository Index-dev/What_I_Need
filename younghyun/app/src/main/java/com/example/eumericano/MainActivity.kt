package com.example.eumericano

import android.content.ContentValues
import android.content.Intent
import android.database.sqlite.SQLiteDatabase
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.annotation.RequiresApi
import com.example.eumericano.databinding.ActivityMainBinding
import layout.MainDBHelper
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

class MainActivity : AppCompatActivity() {
    private var mBinding: ActivityMainBinding? = null
    private val binding get() = mBinding!!


    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        lateinit var DBHelper : MainDBHelper
        lateinit var Database : SQLiteDatabase

        mBinding= ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        DBHelper =  MainDBHelper(this, "TURN_ON_APP.db", null, 1)
        Database = DBHelper.writableDatabase

        val current = LocalDateTime.now()
        val formatter = DateTimeFormatter.ISO_DATE
        val formatted = current.format(formatter)

        var contentValues = ContentValues()
        contentValues.put("date",formatted)

        Database.insert("TURNED_ON_APP", null, contentValues)
    }

    fun showTimer(v: View) {
        var intent= Intent(this, TimerActivity::class.java)
        startActivity(intent)
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun yesterdayMeditation(v: View) {
        lateinit var DBHelper : MainDBHelper
        lateinit var Database : SQLiteDatabase
        DBHelper =  MainDBHelper(this, "TURN_ON_APP.db", null, 1)
        Database = DBHelper.writableDatabase


        val current = LocalDateTime.now()
        val formatter = DateTimeFormatter.ISO_DATE
        val formattedDate = current.format(formatter)
        val formatterTime = DateTimeFormatter.ISO_TIME
        val formattedTime = current.format(formatterTime)


        var contentValues = ContentValues()
        contentValues.put("date",formattedDate)
        contentValues.put("btn_name","yesterdayMeditation")
        contentValues.put("time",formattedTime)


        Database.insert("Check_TODO", null, contentValues)
    }

}