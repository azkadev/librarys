# Mini db
- Id library
```js

```

## Quickstart

```js
var db_mini = new minidb.minidb();
function main() {
    var default_value = false;
    db_mini.getValue("azka", default_value);
    db_mini.getValues({
        "default": "value"
    });
    db_mini.setValue("azka", "skoaksoa");
    db_mini.setValues({
        "defaault": "true"
    });
    db_mini.delete("azka");
    db_mini.deletes();
}
```

## Methods

#### getValue
| No | key         | value      | Deskripsi | `required` |
|----|:-----------:|:----------:|:----------|:----------:|
| 1 | `key` | string |  | `yes` |
| 2 | `default_value` | any | | `no` |
- examples
```js
getValue("azka", "data");
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