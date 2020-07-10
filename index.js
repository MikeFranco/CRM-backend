require('dotenv/config');
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 5001;
const auth = require('./routes/authRoutes.js');
const groups = require('./routes/groupsRoutes.js');
const users = require('./routes/usersRoutes.js');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE');
  next();
});

//Middlewares
app.use(cors({ credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'perritoShihuahua',
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB!')
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use('/', auth);
app.use('/', groups);
app.use('/', users);

app.get('/', (req, res) => {
  res.send('Nothing to see here 👀');
});

app.listen(port, () => console.log(`Corriendo en el puerto: ${port}`));

module.exports = { app };
