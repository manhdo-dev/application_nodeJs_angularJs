require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

mongoose.connect(dbConfig.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(function() {
    console.log("Successfully connected to the database")
}).catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
});

const port = process.env.PORT;
const todoRoute = require('./routes/todo.route');

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render("index");
});

app.use(process.env.TODO_ROUTE, todoRoute);

app.listen(port, () => {
    console.log('App listening on port ' + port);
});