app.get('/example',methodMiddleware, (req, res) => {
    res.status(200).json({message: 'Hola!!!!'})
})

const methodMiddleware = (req, res, next) => {
    console.log(req.method)
    next()
}