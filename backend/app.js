var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
 require('dotenv').config();
var indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');
var app = express();


mongoose.connect(
  `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.z3epj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser:true,
    useUnifiedTopology:true
  }, (err) => {
        if(err) throw err;
        console.log('connected mongodb');
  });



app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', contactRouter);
app.use('/api/user', userRouter);
app.use('/api/post',postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
