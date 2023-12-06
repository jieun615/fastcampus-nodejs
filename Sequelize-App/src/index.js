const express = require('express');
const db = require('./models');
const app = express();
const User = db.users;

// db.sequelize.sync({force: true}).then(() => {
//     console.log('database drop');
// });

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

app.get("/users", (req, res) => {
    User.findAll()
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || '유저 정보 가져오는데 실패함'
        })
    })
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(user => {
            if(user) {
                res.send(user);
            } else {
                res.status(404).send({
                    message: `id가 ${id}인 유저가 없음`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `${id}인 유저를 탐색 중 에러`
            })
        })
})

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
        where: { id }
    })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `${id}인 유저 업데이트 중 에러`
            })
        })
})

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
})