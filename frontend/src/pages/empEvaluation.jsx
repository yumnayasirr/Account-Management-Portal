import React from 'react'
import { useState } from 'react'

const empEvaluation = () => {

    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        const getEvaluations = async () => {
            try {
                const response = await fetchEvaluations();
                setEvaluations(response);
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
          <li key={evaluation._id} onClick={(event)=>{onclick(evaluation._id, event)}}>{employee.date}</li>
        ))}
      </ul>
    </div>
  )
}

export default empEvaluation