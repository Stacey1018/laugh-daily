const router = require('koa-router')()
const User = require('../dbs/models/user')
router.prefix('/api/users')

// 注册用户
router.post('/addUser',async function(ctx){
  let code
  let message

  let {username,password}=ctx.request.body
  const results = await User.find({username})
  if(results.length>0){
    code = -1
    message = '该用户名已被占用'
  }else{
    const user = new User({username,password})
    try{
      await user.save()
      code = 0
      message='注册成功'
    }catch(e){
      code = -1
      message='注册失败'
    }
  }

  ctx.body={
    code:code,
    message:message
  }
})

// 查找用户
router.post('/getUser',async function(ctx){
  let username = ctx.request.body.username
  const result = await User.findOne({username})
  const results = await User.find({username})
  ctx.body = {
    code:0,
    result,
    results
  }
})

// 更新用户
router.post('/updateUser',async function(ctx){
  const result = await User.where({
    username: ctx.request.body.username
  }).update({
    password: ctx.request.body.password
  })
  ctx.body={
    code:0
  }
})

// 删除用户
router.post('/removeUser',async function(ctx){
  const result = await User.where({
    username: ctx.request.body.username
  }).remove()
  ctx.body={
    code:0
  }
})

module.exports = router
