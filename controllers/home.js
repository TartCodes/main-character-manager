module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}

module.exports = {
    getLogin: (req, res) => {
        res.render('/login')
    }
}