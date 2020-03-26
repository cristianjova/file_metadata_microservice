const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');

// Init app
const app = express();

// Init fileupload
app.use(fileUpload());

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// Homepage Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route API
app.use('/api/fileinfo', require('./routes/api/file'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servicio iniciado en puerto ${PORT}`));
