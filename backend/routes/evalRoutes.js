const {getEvaluations, getEvaluationById, createEvaluation, deleteEvaluation} = require('../controllers/evalController');
const {authenticateAdmin} = require('../middleware/evalAuth');

const express = require('express');
const router = express.Router();

// Admin only routes
router.get('/',authenticateAdmin, getEvaluations);
router.post('/',authenticateAdmin, createEvaluation);
router.delete('/',authenticateAdmin, deleteEvaluation);

// Public routes
router.route('/:id').get(getEvaluationById);

module.exports = router;
