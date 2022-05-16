# gsheets

library untuk memudahkan menyimpan data ke google sheet

anw saya males buat dokumentation, kalian coba explore sendiri ya library juga open source,

kalo bingung langsung ke discusstion github tanya aja disitu saya bakal jawab,

# methods

## save

https://user-images.githubusercontent.com/82513502/168635528-c200b7bd-8ede-4953-99b8-fc183a4fa259.mp4

```js
var gsheet = new azkadevgsheets.googlesheet("shet_id");
function myFunction() {
    var range_name = "Sheet1!A2:Z";
    var user_data = "i";
    var array_save = [
        user_data,
        "h",
        "saoskaos",
        "saskaosoas",
        "saoskaosok",
    ];
    var array_update = [
        user_data,
        null,
        "i",
        "j",
        "k",
        "l",
    ];
    var range_name_update = "A2:Z";
    gsheet.save(range_name, user_data, array_save, array_update, range_name_update);
}
```
