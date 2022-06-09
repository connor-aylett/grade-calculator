import React, { useEffect } from 'react';

function AverageCalc({updateScore, category, gradeList}) {

    const pointsSum = gradeList.reduce((total, curr) => total = Number(total) + Number(curr.grade), 0)
    const maxPointsSum = gradeList.reduce((total, curr) => total = Number(total) + Number(curr.maxpts), 0)
    const average = (pointsSum/maxPointsSum)*100;

    useEffect(() => {
        updateScore(category.category, average * category.weight)
      }, [average, category.category, category.weight, updateScore])

    return ( 
        <div>
            <p className="averageStyle  ">Category average: {(gradeList.length == 0) ? '0' : <u>{average}</u>}</p> 
        </div>
    );
}

export default AverageCalc;