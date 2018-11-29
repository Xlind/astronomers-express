var express = require('express')
var path = require('path')

// 创建app
var app = express()

//公开public的资源
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

//配置使用模板引擎
app.engine('html', require('express-art-template'))

//首页
app.get('/', function (req, res) {
    res.render('astronomers.html')
})
//星闻天天报
app.get('/xwttb', function (req, res) {
    res.render('星闻天天报.html')
})
//星空大讲堂
app.get('/xkdjt', function (req, res) {
    res.render('星空大讲堂.html')
})
//追星发烧友
app.get('/zxfsy', function (req, res) {
    res.render('追星发烧友.html')
})
// 天文画中游
app.get('/twhzy', function (req, res) {
    res.render('天文画中游.html')
})
//论坛
app.get('/lt', function (req, res) {
    res.render('论坛.html')
})
//注册
app.get('/enroll', function (req, res) {
    res.render('enroll.html')
})
//登录
app.get('/login', function (req, res) {
    res.render('login.html')
})
//子页面
app.get('/cone', function (req, res) {
    res.render('C1.html')
})
app.get('/ctwo', function (req, res) {
    res.render('C2.html')
})

app.listen(3000,function(){
    console.log('express is running...')
    })