var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "emmajudge",
        password: "ej@SQL!16",
        database: "burgers_db"
    });
};

connection.connect(function (error) {
    if (error) {
        console.log("error connecting:", error.stack);
        return;
    } console.log("connected on ID:", connection.threadID);
});


module.exports = connection;