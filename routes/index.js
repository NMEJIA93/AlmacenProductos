const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index')
});

/* router.get('*', (req, res) => {
    res.send('Pagina no encontrada')
 res.sendFile(__dirname + '/Public/404.html'); 
}) */

module.exports = router;