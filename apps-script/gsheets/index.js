/*
============================================================================
Licensed ( creator script ) :
GoogleSheet : @azkadev

ID:

1. MIgz3_PHZHDfCyYqvXf4l3qOF4qn-QYEF
2. 18cr79yjSN-3kIN2qLq1yjaDwOGKAj89R3Y_aFAly-KxyOIUsSpNXb7l3

https://www.youtube.com/channel/UCj9stNGVvQJspYMp8-lG_ng

============================================================================
*/
var googlesheet = class Googlesheets {

    constructor(sheet_id) {
        this.sheet_id = sheet_id;
    }

    getAll(range_name) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        return Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
    }
    
    getUserRow(range_name, user_data) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return false;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^"+user_data+"$", "i");
                if (pola.exec(data[row][0])) {
                    return row+2;
                }
            }
            return false;
        }
    }

    save(range_name, user_data, array_save, array_update, range_name_update) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        
        if (!user_data) {
            return "User data is required Please Read My docs, example msg.from.id";
        }
        if (!array_save) {
            return "array_save is required Please Read My docs, example [msg.from.id, msg.from.username]";
        }
        if (!array_update) {
            return "array_update is required Please Read My docs, example [msg.from.id, msg.from.username]";
        }
        if (!range_name_update) {
            return "range_name_update is required Please Read My docs, example \"Sheet!A\"";
        }
        var rownum = this.getUserRow(range_name, user_data);
        if (rownum == 0) {
            var datauser = [
                array_save
            ];
            var valueRange = Sheets.newValueRange();
            valueRange.values = datauser;
            var result = Sheets.Spreadsheets.Values.append(valueRange, this.sheet_id, range_name, { valueInputOption: 'USER_ENTERED' });
        } else {
            var datauser = [
                array_update
            ];
            var rangeName = range_name_update.replace(/(:.*)/ig,"")+rownum+":"+range_name_update.replace(/(.*:)/ig,"")+rownum;
            var valueRange = Sheets.newValueRange();
            valueRange.values = datauser;
            var result = Sheets.Spreadsheets.Values.update(valueRange, this.sheet_id, rangeName, { valueInputOption: 'USER_ENTERED' });
        }
    }

    allow(range_name, user_data, get_row_num, return_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return 0;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^"+user_data+"$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    return Number(data[row][return_row_num]);
                }
            }
            return 0;
        }
    }
    count(range_name, user_data, get_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example \"private\"";
        }
        var users = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!users) {
            return 0;
        } else {
            var x = 0;
            for (var row = 0; row < users.length; row++) {
                var pola = new RegExp("^"+user_data+"$", "i");
                if (pola.exec(users[row][get_row_num])) {
                    x = x+1;
                }
            }
            return x;
        }
    }

    arrayToJson(data) {
        var result = {}
        for (x in data) {
            result[x] = data[x];
        }
        return result;
    }
    getRow(range_name, user_data, get_row_num, return_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return false;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^"+user_data+"$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var hasil = data[row][return_row_num];
                    return hasil;
                }
            }
            return false;
        }
    }
    getRows(range_name, user_data, get_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return false;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^"+user_data+"$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var hasil = data[row];
                    return {...hasil};
                }
            }
            return false;
        }
    }

    saveRow(range_name, user_data, get_row_num, new_data, range_name0) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        if (!new_data) {
            return "new_data data is required Please Read My docs, example msg.from.id";
        }
        if (!range_name0) {
            return "range_name0 is required Please Read My docs, example \"0\"";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^"+user_data+"$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var rownum = row+2;
                    var datauser = [
                        [new_data]
                    ];
                    var rangeName = range_name0+rownum;
                    var valueRange = Sheets.newValueRange();
                    valueRange.values = datauser;
                    var result = Sheets.Spreadsheets.Values.update(valueRange, this.sheet_id, rangeName, { valueInputOption: 'USER_ENTERED' });
                }
            };
        }
    }

    saveRows(range_name, user_data, get_row_num, new_data_array, range_name_update, range_name_update0) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        if (!new_data_array) {
            return "new_data_array data is required Please Read My docs, example msg.from.id";
        }
        if (!range_name_update) {
            return "range_name_update is required Please Read My docs, example \"0\"";
        }
        if (!range_name_update0) {
            return "range_name_update0 is required Please Read My docs, example \"0\"";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
          
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^"+user_data+"$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var rownum = row+2;
                    var datauser = [
                        new_data_array
                    ];
                    var rangeName = range_name_update+rownum+":"+range_name_update0+rownum;
                    var valueRange = Sheets.newValueRange();
                    valueRange.values = datauser;
                    var result = Sheets.Spreadsheets.Values.update(valueRange, this.sheet_id, rangeName, { valueInputOption: 'USER_ENTERED' });
                }
            };
        }
    }


    
    checkadmin(range_name, user_data, get_row_num, return_row_num, user_id) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "user_data is required Please Read My docs, example msg.from.id";
        }
        if (!user_id) {
            return "user_id is required Please Read My docs, example msg.from.id";
        }
        var ambildata =  this.getRow(range_name, user_data, get_row_num, return_row_num) ;
        var result = parse(ambildata).result;
        var data = [
        ];
        try {
            for (var row = 0; row < result.length; row++) {
                data.push(result[row].user.id);
            }
            if (data.indexOf(user_id) > -1) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }

}



function temp_getValue(kunci) {
    try {
        return PropertiesService.getUserProperties().getProperty(kunci)
    } catch (e) {
        return false;
    }

}
function temp_getValues() {
    return PropertiesService.getUserProperties().getProperties();
}

function temp_setValue(kunci, data) {
    return PropertiesService.getUserProperties().setProperty(kunci, data);
}

function temp_setValues(data) {
    return PropertiesService.getUserProperties().setProperties(data)
}

function temp_delete(kunci) {
   
    try {
        return PropertiesService.getUserProperties().deleteProperty(kunci);
    } catch (e) {
        return false;
    }
}

function temp_deleteAll() {
    return PropertiesService.getUserProperties().deleteAllProperties();
}



function tanggal(msg_date, ribuan) {
    ribuan = (typeof ribuan == 'undefined') ? false : true;

    var a = new Date(msg_date);
    if (ribuan) {
        a = new Date(msg_date * 1000);
    }
    var months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ];
    var month = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ];
    var hari = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jum\'at',
        'Sabtu'
    ];
    var suasana = [
        'Pagi',
        'Pagi',
        'Pagi',
        'Pagi',
        'Pagi',
        'Pagi',
        'Pagi',
        'Pagi',
        'Pagi',
        'Pagi',
        'Siang',
        'Siang',
        'Siang',
        'Siang',
        'Siang',
        'Siang',
        'Sore',
        'Sore',
        'Sore',
        'Malam',
        'Malam',
        'Malam',
        'Malam',
        'Malam'
    ];

    // ambil pecahan waktu masing-masing
    var tahun = a.getFullYear();
    var bulan = months[a.getMonth()];
    var tanggal = a.getDate();
    var jam = a.getHours();
    var menit = a.getMinutes();
    var detik = a.getSeconds();
    var days = hari[a.getDay()];
    var type = suasana[a.getHours()];
    var no_bulan = month[a.getMonth()]
    var hasil = {
        "tahun": tahun,
        "bulan": bulan,
        "no_bulan": no_bulan,
        "hari": days,
        "tanggal": tanggal,
        "suasana": type,
        "jam": jam,
        "menit": menit,
        "detik": detik,
        "integer": msg_date,
        "date": `${tanggal}-${no_bulan}-${tahun}`,
        "message": `${days} ${tanggal}-${bulan}-${tahun}, ${jam}:${menit} ${suasana}`
    }
    return hasil
}



var minidb = class Minidb {
    constructor(type = "user"){
        if (RegExp("^user$","i").exec(type)){
            this.db = PropertiesService.getUserProperties();
        }   else if (RegExp("^script$","i").exec(type)){
            this.db = PropertiesService.getScriptProperties();
        }   else if (RegExp("^document$","i").exec(type)){
            this.db = PropertiesService.getDocumentProperties();
        }  
    }
    getValue(){
        try {
            return this.db.getProperty(kunci)
        } catch (e) {
            return false;
        }
    }
    getValues(){
        return this.db.getProperties();
    }
    setValue(key, data){
        return this.db.setProperty(key, data);
    }
    setValues(data){
       return  this.db.setProperties(data)
    }
    delete(key){
        try {
        return this.db.deleteProperty(key);
        } catch (e){
            return false;
        }
    }
    deletes(){
        return this.db.deleteAllProperties();
    }
}