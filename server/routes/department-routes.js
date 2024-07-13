const express = require('express');
const upload = require('../middlewares/upload');
const router = express.Router();

const controller = require('../controllers/departmentControllers');
router.get('/', controller.getDepartments);
router.post('/', upload.single('image'), controller.postDepartment);
module.exports = router;
