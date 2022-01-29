const { Router } = require('express');
const router = new Router()
const pathfs = require('path');
const Image = require('../models/Image');
const fs = require('fs');
const pathToStatic = pathfs.join(__dirname, '..', '..', 'static', 'img')
const moduleNames = ["carouselFirst", "carouselSecond", "rewiews", "shop"]
const validateModule = (name) => {
    if (moduleNames.includes(name)) {
        return true;
    }
    return false
}
const existFile = (path) => {
    if (fs.existsSync(path)) {
        return true
    }
    return false
}
const normalizeSlash = (path) => {
    const arrayPath = path.split('\\\\')
    return arrayPath.join("\\");
}

router.delete('/deletefileonmodule', async(req, res) => {
    try {
        const id = req.query.id
        if (!module || !id) {
            return res.status(400).json({ message: "В параметрах запроса должно быть id удляемого объекта" })
        }
        const delImage = await Image.findByIdAndDelete({ _id: id });
        const imagePath = pathfs.join(pathToStatic, delImage.path)
        const otherImage = await Image.find({ path: imagePath })
        if ((!otherImage || otherImage.length === 0) && fs.existsSync(imagePath)) {

            await fs.unlink(imagePath, (err => {
                if (err) {
                    return res.status(500).json({ message: 'Что то не так при удалении файла с сервера, в бд файл скорее всего удалился', error: err });
                }
            }))

        }
        return res.status(200).json({ message: `объект удален из модуля ${delImage.module}` });
    } catch (e) {
        return res.status(500).json({ message: 'Что то не так', error: e.message });
    }
});
router.delete('/deletefile', async(req, res) => {
    try {
        const path = req.query.path
        if (!path) {
            return res.status(400).json({ message: "В параметрах запроса должно быть путь до удляемого объекта" })
        }
        console.log(path);

        const delImage = await Image.deleteMany({ path: path })
        const imagePath = pathfs.join(pathToStatic, path)


        if (fs.existsSync(imagePath)) {
            await fs.unlink(imagePath, (err => {
                if (err) {
                    return res.status(500).json({ message: 'Что то не так при удалении файла с сервера, в бд файл скорее всего удалился', error: err });
                }
            }))
        } else {
            return res.status(400).json({ message: "Такого файла на сервере нет" });
        }

        res.status(200).json({ message: "файл удален" });
    } catch (e) {
        res.status(500).json({ message: 'Что то не так', error: e.message });
    }
});
router.post('/addfile', async(req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('Вы не прикрепили файл');
        } else {
            const { module } = req.body
            if (!module) {
                return res.status(400).json({ message: "В запросе должно быть указано название модуля", modules: moduleNames })
            }
            if (!validateModule(module)) {
                return res.status(400).json({ message: "Введите правильное название модуля", modules: moduleNames })
            }
            const imageMongo = {
                module: module
            }
            if (moduleNames[0] !== module) {
                const { name, description } = req.body
                if (!name || !description) {
                    return res.status(400).json({ message: "В запросе должно быть название и описание" })
                }
                imageMongo.name = name
                imageMongo.description = description
            }
            let foo = req.files.foo
            let uploadPath = pathfs.join(pathToStatic, foo.name)

            foo.mv(uploadPath, function(err) {
                if (err) {
                    return res.status(500).send(err);
                }

            })
            imageMongo.path = foo.name;
            const image = new Image(imageMongo)
            await image.save()
            res.status(200).json({ message: `Файл ${foo.name} добавлен` });
        }

    } catch (e) {
        res.status(500).json({ message: 'Что то не так', error: e.message });
    }
});

router.post('/addexistfile', async(req, res) => {
    try {

        const { module, path } = req.body
        if (!module || !path) {
            return res.status(400).json({ message: "В запросе должно быть указано название модуля и путь до файла на сервере", modules: moduleNames })
        }
        if (!validateModule(module)) {
            return res.status(400).json({ message: "Введите правильное название модуля", modules: moduleNames })
        }
        const imagePath = pathfs.join(pathToStatic, path)
        let imageMongo = {
            module: module,
            path: path
        }

        if (!existFile(imagePath)) {
            return res.status(400).json({ message: `По данному пути: ${path} файла на сервере нет` })
        }


        const existImage = await Image.find(imageMongo)
        if (existImage.length !== 0) {
            return res.status(400).json({ message: "Такой файл в данном модуле уже содержится" })
        }
        if (moduleNames[0] !== module) {
            const { name, description } = req.body
            if (!name || !description) {
                return res.status(400).json({ message: "В запросе должно быть название и описание" })
            }
            imageMongo.name = name
            imageMongo.description = description
        }

        const image = new Image(imageMongo)
        await image.save()
        res.status(200).json({ message: `Добавлена новая ссылка в бд` });


    } catch (e) {
        res.status(500).json({ message: 'Что то не так', error: e.message });
    }
});
router.get('/getmodules', async(req, res) => {
    try {
        res.json(moduleNames)
    } catch (e) {
        res.status(500).json({ message: 'Что то не так' });
    }
})
router.get('/getfiles/:module', async(req, res) => {
    try {
        const module = req.params.module
        if (!validateModule(module)) {
            return res.status(400).json({ message: "Введите правильное название модуля", modules: moduleNames })
        }
        const files = await Image.find({ module: module })
        res.json(files)
    } catch (e) {
        res.status(500).json({ message: 'Что то не так', error: e.message });
    }
})


module.exports = router