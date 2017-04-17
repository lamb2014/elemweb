/**
 * Created by Administrator on 2017/4/17.
 */
var express=require('express');
var config=require('./config/index')


var port=process.env.PORT || config.build.port
var  app=express();

var router=express.Router();
router.get('/',function (req,res,next) {
  req.url='/index.html';
  next();
});
app.use(router);
var appData = require('./data.json')//引入模拟的json数据
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;
var apiRoutes = express.Router();
apiRoutes.get('/seller', function (req, res) {//express路由接口
  res.json({
    errno: 0,
    data: seller
  })
})
apiRoutes.get('/goods', function (req, res) {//express路由接口
  res.json({
    errno: 0,
    data: goods
  })
})
apiRoutes.get('/ratings', function (req, res) {//express路由接口
  res.json({
    errno: 0,
    data: ratings
  })
})
app.use('/api', apiRoutes);
app.use(express.static('./dist'));
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
