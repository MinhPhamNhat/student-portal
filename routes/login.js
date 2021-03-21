const express = require('express')
const router = express.Router()

// GET/ go to newfeed page
router.get('/', (req, res, next) => {
    if (req.user) {
        res.redirect('/')
    } else {
        res.render('login')
    }

})

module.exports = router;