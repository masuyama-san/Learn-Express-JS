const express = require('express')
const router = express.Router()

router.use(logger)
//静的なものは動的なものの上に置く
router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    // res.send('Create User')
    req.body.firstName
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Get User With ID ${req.params.id}`)
    })

//下記コードを整理すると上になる
// router.get('/:id', (req, res) => {
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Get User With ID ${req.params.id}`)
// })

const users = [{name: "komatsu"}, {name: "tanaka"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
    }

module.exports = router