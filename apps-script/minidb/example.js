var db_mini = new minidb();

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
