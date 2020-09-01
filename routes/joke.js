const { url } = require('koa-router')

const router = require('koa-router')()
const cheerio = require('cheerio')
const charset = require('superagent-charset')
const superagent = charset(require('superagent'))
router.prefix('/api/joke')

router.get('/getJoke', async (ctx, next) => {
  const url = 'http://xiaohua.zol.com.cn/detail60/59423.html'
   let result = await getJoke(url)
  ctx.body = {
    res:result
  }

})

function getJoke(url) {
  return new Promise(function(resolve,reject){
    superagent.get(url)
    .charset('')
    .buffer(true)
    .end((err,data)=>{
      if(err){
        console.log('页面不存在',err)
      }else{
        let html = data.text
        let $ = cheerio.load(html, {
          decodeEntities: false,
          ignoreWhitespace: false,
          xmlMode: false,
          lowerCaseTags: false
        }) //用cheerio解析页面数据
        let text = $('.article-text').text()
        let arr = text.split('————')
        console.log(arr)
        resolve(arr)
      }
    
     
    })
  })
}



module.exports = router
