const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars') //colocar uma variavel que armazena temporariamente


app.get('/peixe', (req, res) => {
    res.render('peixe')
})

app.get('/', (req, res) => {//associa uma prp
    const user = {
        name: 'Guilherme',
        age: 19,
        email: 'guiolvsan@gmail.com'
        
    }
    const auth = false

    const approved = true

    res.render('acai', {user: user, auth, approved})


})

app.listen(3000)