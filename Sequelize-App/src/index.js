const express = require('express');
const db = require('./models');
const app = express();
const User = db.users;

db.sequelize.sync({force: true}).then(() => {
    console.log('database drop');
});

app.use(express.json());

app.post('/users', (req, res) => {
    const { firstName, lastName, hasCar } = req.body;

    const user = {
        firstName,
        lastName,
        hasCar
    }
    
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || '유저 생성 중 에러 발생'
            })
        })
})

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
})