const express = require ('express') ;
const router = express.Router();
const path = require ('path') ;


//routes 
router.get('/', (req , res ) => {
    res.sendFile(path.join(__dirname , '../' ,'public' , 'home.html')) ;
})

router.get('/services' , (req , res ) => {
    res.sendFile(path.join(__dirname , '../' ,'public' , 'services.html')) ;
})
router.get('/contact' , (req , res ) => {
    res.sendFile(path.join(__dirname , '../' ,'public' , 'contact.html')) ;
})


module.exports = router;
