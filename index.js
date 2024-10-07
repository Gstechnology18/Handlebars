const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars') //colocar uma variavel que armazena temporariamente

app.get('/', (req, res) => {//associa uma prp
    res.render('acai')

})

app.listen(3000)