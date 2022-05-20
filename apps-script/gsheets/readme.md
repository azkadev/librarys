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


## Docs

#### getAll
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `range_name` | string |  | `yes` |
- examples
```js
var range_name = "Sheet1!A2:Z";
getAll(range_name);
```

#### getRow
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `range_name` | string |  | `yes` |
| 2 | `user_data` | string or number | | `yes` |
| 3 | `get_row_num` | number | | `yes` |
| 4 | `return_row_num` | number | | `yes` |
- examples
```js
var range_name = "Sheet1!A2:Z"; 
var user_data = "azka";
var get_row_num = 0;
var return_row_num = 2;
getRow(range_name, user_data, get_row_num, return_row_num)
```

#### getRows
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `range_name` | string |  | `yes` |
| 2 | `user_data` | string or number | | `yes` |
| 3 | `get_row_num` | number | | `yes` | 
- examples
```js
var range_name = "Sheet1!A2:Z"; 
var user_data = "azka";
var get_row_num = 0;
getRows(range_name, user_data, get_row_num)l
```


#### save
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `range_name` | string |  | `yes` |
| 2 | `user_data` | string or number | | `yes` |
| 3 | `array_save` | object array |  | `yes` |
| 4 | `array_update` | object array | | `yes` |
| 5 | `range_name_update` | string | | `yes` |
- examples
```js
var range_name = "Sheet1!A2:Z";
var user_data = "i";
var array_save = [
    user_data,
    "h",
    "saoskaos",
    "saskaosoas",
    "saoskaosok"
];
var array_update = [
    user_data,
    null,
    "i",
    "j",
    "k",
    "l"
];
var range_name_update = "A2:Z";
save(range_name, user_data, array_save, array_update, range_name_update);
```
#### saveRow
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `range_name` | string |  | `yes` |
| 2 | `user_data` | string or number | | `yes` |
| 3 | `get_row_num` | number | | `yes` | 
| 4 | `new_data` | any | | `yes` | 
| 5 | `range_name0` | string |  | `yes` |
- examples
```js
var range_name = "Sheet1!A2:Z"; 
var user_data = "azka";
var get_row_num = 0;
saveRow(range_name, user_data, get_row_num, new_data, range_name0);
```

#### saveRows
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `range_name` | string |  | `yes` |
| 2 | `user_data` | string or number | | `yes` |
| 3 | `get_row_num` | number | | `yes` | 
| 4 | `new_data_array` | object array | | `yes` |  
| 5 | `range_name_update` | string |  | `yes` |
| 6 | `range_name_update0` | string |  | `yes` |
- examples
```js
var range_name = "Sheet1!A2:Z"; 
var user_data = "azka";
var get_row_num = 0;
saveRows(range_name, user_data, get_row_num, new_data_array, range_name_update, range_name_update0) 
```


#### getValues
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `default_value` | object json | | `yes` |
- examples
```js
getValues({
    "azka": "data"
});
```
#### setValue
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `key` | string |  | `yes` |
| 2 | `value` | any | | `yes` |
- examples
```js
setValue("azka", "data");
```
#### setValues
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
|  1 | `value` | object json |  | `yes` | 
- examples
```js
setValues({
    "azka": "data"
});
```

#### delete
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1  | `key` | string |  | `yes` |
- examples
```js
delete("azka");
```

#### deletes
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
- examples
```js
delete();
```