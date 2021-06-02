const express = require ('express') 
const app = express ()
app.use(express.static(__dirname + '/public'))


const t = new Date(Date.now());
console.log(t)
const authMidelware = (req, res, next) => {
const day = t.getDay();
const hour = t.getHours() - 1;
console.log(day);
console.log(hour);
if ((day>0)&&(day<=5)&&(hour>=9)&&(hour<=17)){
        console.log('user authorized')
        next()
    }
    else {
        res.send('user is not authorized')
    }; 
};

app.use(authMidelware);

app.use('/views' , require('./routes/view'))

app.listen (5000 , (err) => 
{
if (err)  console.log(err)
else console.log('server is running on port 5000')
})
