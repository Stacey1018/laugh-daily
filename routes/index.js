const { url } = require('koa-router')


const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// router.get('/joke', async (ctx, next) => {
//   const url = 'http://xiaohua.zol.com.cn/detail60/59423.html'
//    let result = await getJoke(url)
  

//   ctx.body = {
//     res:result
//   }

// })


router.get('/string', async (ctx, next) => {
  // url = 'http://xiaohua.zol.com.cn/detail60/59423.html',
  // superagent.get(url)
  // .charset('')
  // .buffer(true)
  // .end((err,data)=>{
  //   if(err){
  //     console.log('页面不存在',err)
  //   }
  //   console.log('data',data)
  //   let html = data.text
  //   res = data.text
  //   ctx.body = {
  //     res:res
  //   }
  // })
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
