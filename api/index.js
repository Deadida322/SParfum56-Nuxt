const express = require('express');
var fileUpload = require('express-fileupload');
const app = express()

const PORT = 5000
app.use(express.json({ extanded: true }))

app.use(fileUpload({}));
app.use('/api', require('./routes/auth.route'))
app.use('/api', require('./routes/file.route'))

async function start() {
    try {

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch (e) {
        console.log(`Server error ${e.message}`);
        process.exit(1)
    }
}
start()