const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
const port = 5000;

var expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


app.set('view engine', 'ejs');
app.set('views', './views');
// app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);

// app.use(session({
//     name: 'Assessment',
//     //TODO change the secret before deployment in production mode
//     secret: 'blahsomething',
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: (1000 * 60 * 100)
//     },
//     store:  MongoStore.create(
//         {
//             mongoUrl: 'mongodb://localhost/Assessment',
//             autoRemove: 'disabled'
//         },
//         function(err){
//             console.log(err || 'connect-mongodb setup');
//         }
//     )
// }));

app.use(express.urlencoded());
app.use(cookieParser());
// app.use('/', (req, res) => {
//     return res.json(200, {
//         message: "App running!"
//     })
// })
app.use('/', require('./routes'));
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});