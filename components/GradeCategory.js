import React, { useState } from 'react';
import AverageCalc from '../components/AverageCalc';
import ListOfGrades from '../components/ListOfGrades';

function GradeCategory({updateScore, category}) {

    const [currentGrade, setCurrentGrade] = useState(null);
    const [gradeList, updateGradeList] = useState([]);
    const[maxPoints, setMaxPoints] = useState(null);
    const[currentTitle, setAssignmentTtitle] = useState("");


    const handleGradeChange = e =>{
        setCurrentGrade(e.target.value);
    }

    const handleMaxPointsChange = e =>{
        setMaxPoints(e.target.value);
    }

    const handleAssignmentTitleChange = e =>{
        setAssignmentTtitle(e.target.value);
    }

    const addGradeToList = () =>{
        updateGradeList([...gradeList, {title: currentTitle, grade: currentGrade, maxpts: maxPoints, key: Date.now()}]);
        setCurrentGrade("");
        setMaxPoints("");
        setAssignmentTtitle("")
    }

    return ( 
        <div>
            <div className='Wrapper'>
                <form>
                    <label>Assignment Title:</label><br></br>
                    <input 
                    value = {currentTitle} 
                    onChange = {handleAssignmentTitleChange}
                    placeholder = 'e.g. Midterm 1'
                    /><br></br>
                    <label>Points Received:</label><br></br>
                    <input 
                    value = {currentGrade} 
                    onChange = {handleGradeChange}
                    placeholder = 'e.g. 85'
                    /><br></br>
                    <label>Max Points:</label><br></br>
                    <input 
                    value = {maxPoints} 
                    onChange = {handleMaxPointsChange}
                    placeholder = 'e.g. 100'
                    />
                </form>
                <br></br><button onClick={addGradeToList}> Add Assignment </button>
            </div>
            <br></br><ListOfGrades gradeList = {gradeList} updateGradeList ={updateGradeList}/>
            <AverageCalc updateScore = {updateScore} category={category} gradeList = {gradeList}/>
        </div>
    );
}

export default GradeCategory;