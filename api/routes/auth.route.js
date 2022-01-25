const { Router } = require('express');

const router = Router()

router.post('/admin', async(req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Неккоректные данные при регистрации' })
        }
        const { email, password } = req.body
        const candidate = await User.findOne({ email: email })
        if (candidate) {
            return res.status(400).json({ message: "Такой пользователь уже есть" })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email: email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: "Пользователь создан" })
    } catch (e) {
        res.status(500).json({ message: 'Что то не так' });
    }
});