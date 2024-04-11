const express = require('express');
const member=require("./src/database/info/info_database")
const app = express();

//const router = require('./router')(app);

app.set('views', './src/views');
app.set('view engine', 'ejs');

const router = express.Router();
app.use('/', router);

router.get('/', (req, res) => {
  console.log(member)
  res.render('index');
});

const router2 = express.Router();
app.use('/info', router2);
router2.get('/list', (req, res) => {
  res.send('info/list 경로');
});

app.listen(3000, () => {
  console.log('3000 port server');
});
