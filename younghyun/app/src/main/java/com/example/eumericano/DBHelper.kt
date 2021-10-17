package layout

import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper

class MainDBHelper(
    context: Context?,
    name: String?,
    factory: SQLiteDatabase.CursorFactory?,
    version: Int
    ) : SQLiteOpenHelper(context, name, factory, version) {

    override fun onCreate(db: SQLiteDatabase) {
        var mainSql : String = "CREATE TABLE if not exists TURNED_ON_APP ( " +
                "date varchar(255) primary key, " +
                "idx int auto_increment, " +
                "describe varchar(255) );";

        db.execSQL(mainSql)

        var checkSql : String = "CREATE TABLE if not exists CHECK_TODO ( " +
                "date date, " +
                "btn_name varchar(255), " +
                "time date, " +
                "FOREIGN KEY ('date') REFERENCES TURNED_ON_APP );";

        db.execSQL(checkSql)
    }

    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        val sql : String = "DROP TABLE if exists TURNED_ON_APP"

        db.execSQL(sql)
        onCreate(db)
    }
}


class CheckDBHelper(
    context: Context?,
    name: String?,
    factory: SQLiteDatabase.CursorFactory?,
    version: Int
) : SQLiteOpenHelper(context, name, factory, version) {

    override fun onCreate(db: SQLiteDatabase) {

    }

    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        val sql : String = "DROP TABLE if exists CHECK_TODO"

        db.execSQL(sql)
        onCreate(db)
    }
}