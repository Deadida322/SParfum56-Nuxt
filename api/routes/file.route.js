const { Router } = require('express');
const router = new Router()
const path = require('path');

router.post('/addfile', async(req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        } else {

            let foo = req.files.foo
            let uploadPath = path.join(__dirname, '..', 'final', foo.name)

            foo.mv(uploadPath, function(err) {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(200).json({ message: `Файл ${foo.name} добавлен` });
            })
        }

    } catch (e) {
        res.status(500).json({ message: 'Что то не так' });
    }
});


module.exports = router