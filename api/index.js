const express = require('express');
var fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const config = require('config');
const app = express()

const PORT = config.get('port') || 5000
app.use(express.json({ extanded: true }))

app.use(fileUpload({}));
app.use('/api', require('./routes/auth.route'))
app.use('/api', require('./routes/file.route'))

async function start() {
    try {
        await mongoose.connect(config.get('mongourl'), {})
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch (e) {
        console.log(`Server error ${e.message}`);
        process.exit(1)
    }
}
start()