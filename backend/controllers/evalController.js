const asyncHandler = require('express-async-handler');
const Evaluation = require('../models/evaluationModel');

// Get all evaluations
const getEvaluations = asyncHandler(async (req, res) => {
    const evaluations = await Evaluation.find({});
    res.status(200).json(evaluations);
});

// Get Evaluation By ID
const getEvaluationById = asyncHandler(async (req, res) =>{
    if(!req.params.id){
        return res.status(400).json({message: 'Please provide an ID'});
    }
    
    const evaluation = await Evaluation.findById(req.params.id);

    if (!evaluation) {
        return res.status(404).json({ message: 'Evaluation not found' });
    }

    res.status(200).json(evaluation);
});

// Create new Evaluation
const createEvaluation = asyncHandler(async(req, res)=>{
    const {userID, TechnicalEval, ClientEval, evaluationDate} = req.body;

    const evaluation = await Evaluation.create({
        userID,
        TechnicalEval,
        ClientEval,
        evaluationDate
    });

    res.status(201).json(evaluation);
});

// Delete Evaluation
const deleteEvaluation = asyncHandler(async(req, res)=>{
    const {userID} = req.body;

    const evaluation = Evaluation.findOne({userID});

    evaluation.deleteOne();

    res.status(200).json({message: 'Evaluation deleted successfully'});
});

module.exports = { getEvaluations, getEvaluationById, createEvaluation, deleteEvaluation };