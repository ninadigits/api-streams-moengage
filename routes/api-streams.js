const express = require('express');
const router = express.Router();

const MoengageController = require('../controllers/MoengageController');

// -------------------------
// Start of Routes Endpoint
// -------------------------
// router.post('/create', function(req, res, next) {
//     res.send('API Streams POST');
// });
router.get('/', MoengageController.getAllMoengage);
router.get('/assoc-data', MoengageController.getAssociationMoe);
router.get('/test', MoengageController.testNested);
router.post('/store/streams', MoengageController.storeStreams);

// -------------------------
// End of Routes Endpoint
// -------------------------

module.exports = router;