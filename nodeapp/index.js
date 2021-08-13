const express = require('express')
const app = express()
app.get('/', (req,res) => {

    res.send("Rodadando nodeapp na porta do nginx")
})

app.listen(3000, () => {
    console.log("Rodando porta 3000")
})