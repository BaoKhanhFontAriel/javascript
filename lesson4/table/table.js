const table = document.body.firstElementChild;

const rows = table.rows;

for (let i = 0; i < rows.length; i++){
    const td = rows[i].cells[i];
    td.style.backgroundColor = "red";

    const reverse = rows[i].cells[rows.length - 1 - i];
    reverse.style.backgroundColor = "red";
}
