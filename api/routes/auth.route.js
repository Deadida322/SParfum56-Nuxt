const { Router } = require('express');
const config = require('config');
const router = new Router()

router.post('/admin', async(req, res) => {
    try {

        const { email, password } = req.body
        if (email !== config.get('email') || password !== config.get('password')) {
            return res.status(400).json({ message: "хрен тебе, не админ ты" })
        }

        res.status(201).json({ message: "Вечер в хату, админ" })
    } catch (e) {
        res.status(500).json({ message: 'Что то не так' });
    }
});
module.exports = router