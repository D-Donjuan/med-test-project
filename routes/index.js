const express = require('express')
const router = express.Router()

//@desc  Landing Page
//@route GET /
router.get('/', (req, res)=>{
    res.render('landing-page')
})

//@desc  Landing Page
//@route GET /
router.get('/data-view', (req, res)=>{
    res.render('data-view')
})

module.exports = router