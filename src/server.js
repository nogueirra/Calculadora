import express from 'express'
const server = express();

const port = process.env.PORT || 5500

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'))

  // View Engine
  .set('views', `${__dirname}/pages`)
  .set('view engine', 'hbs')

  .get('/',(req, res) => {
    res.render('index')
  })
  
  .listen(3000, () => console.log(`Rodando na porta ${port}`))