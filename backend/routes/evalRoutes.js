const {getEvaluations, getEvaluationById, createEvaluation, deleteEvaluation} = require('../controllers/evalController');

const express = require('express');
const router = express.Router();

router.route('/').get(getEvaluations);
router.route('/:id').get(getEvaluationById);
router.route('/create').post(createEvaluation);
router.route('/delete').delete(deleteEvaluation);

module.exports = router;
