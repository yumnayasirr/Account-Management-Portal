import React from 'react'
import { useState , useEffect} from 'react'
import {fetchEvaluations} from '../features/employees/employeeService'


const EmpEvaluation = () => {

    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        const getEvaluations = async () => {
            try {
                const response = await fetchEvaluations();
                
                setEvaluations(response);

                console.log('Response from fetchEvaluations:', evaluations);
                
            } catch (error) {
                console.error('Error fetching evaluations:', error); 
            }
        };

        getEvaluations();
    }, []);

  return (
    <div className='emp-evaluation'>
        <h1 className="title">Evaluation Record</h1>

        <ul className='emp-list'>
        {evaluations.map((evaluation) => (
          <li key={evaluation._id} onClick={(event)=>{onclick(evaluation._id, event)}}>
            <h2 className='title'>Evaluation</h2>
            <p>{evaluation.userID}</p>
            <p>{evaluation.ClientEval}</p>
            <p>{evaluation.TechnicalEval}</p>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default EmpEvaluation  