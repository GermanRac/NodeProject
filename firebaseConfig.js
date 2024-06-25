// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./config/laboratorioreciclajeFirebase.json'); 





if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://laboratorioreciclajea-default-rtdb.firebaseio.com/'
    });
  }

module.exports = admin;