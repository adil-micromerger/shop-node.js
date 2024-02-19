const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine(
//   'hbs',
//   expressHbs.engine({
//     extname: 'hbs',
//     defaultLayout: 'main-layout',
//   })
// );
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// app.listen(3000, '192.168.1.35');
app.listen(3000, '192.168.1.29');
//adil'code updated
