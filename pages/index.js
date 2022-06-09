import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useCallback } from 'react';
import AverageCalc from '../components/AverageCalc';
import GradeCategory from '../components/GradeCategory';
import ListOfGrades from '../components/ListOfGrades';
import NavBar from '../components/NavBar';
function Home() {

const [currentCategory, setCurrentCategory] = useState("");
const [currentWeight, setCurrentWeight] = useState("");
const [categoryList, updateCategoryList] = useState([]);
const [classScores, setClassScores] = useState({});

let weightedAverage = 0;
for(const key in classScores){
    if(!isNaN(classScores[key])){
        weightedAverage+=classScores[key];
    }
}

const updateScore = useCallback((categoryName, score) => {
    setClassScores((s) => ({ ...s, [categoryName]: score }));
  }, [])

const handleCategoryChange = e =>{
    setCurrentCategory(e.target.value);
}

const handleWeightChange = e =>{
    setCurrentWeight(e.target.value);
}

const [showReq, setShowReq] = useState(false)
const addToCategoryList = () =>{
    if(currentCategory!="" && currentWeight!=""){
        updateCategoryList([...categoryList, {category: currentCategory, weight: currentWeight, key: currentCategory}]);
        setCurrentCategory("");
        setCurrentWeight("");
        setShowReq(false);
    } else{
        setShowReq(true);
    }

}

const deleteCatFromList = key => {
    const newCategoryList = categoryList.filter(eachCategory=>{
            return eachCategory.key != key;
    })
    updateCategoryList(newCategoryList);
    delete classScores[key];
    setClassScores(classScores);
}

    return ( 
        <div>
                <p className='ClassGrade'>Weighted Average: {weightedAverage}</p>

                <form style={{marginLeft: '20px'}}>
                    <label>Category Name:</label><br></br>
                    <input
                    value = {currentCategory} 
                    onChange = {handleCategoryChange}
                    placeholder = 'e.g. Midterms'
                    /><br></br>
                    <label>Category Weight:</label><br></br>
                    <input
                    value = {currentWeight} 
                    onChange = {handleWeightChange}
                    placeholder = 'e.g. 0.4'
                    />
                </form>
                <br></br>
            {showReq && <div style={{marginLeft: '20px',color:'red'}}>
                <b><i>**please fill both fields**</i></b>
            </div>}
            <button style={{marginLeft: '20px'}} onClick={addToCategoryList}>Add Category</button>
            <br></br><br></br>
            <div className='categories'>
                {categoryList.map(eachCategory => {
                return(
                    <div className = 'PutMargin' key ={eachCategory.category}>
                        <div className='CatWrap'>
                            <div>
                                <div><b>Category Name: </b>{eachCategory.category}</div>
                                <div><b>Weight: </b>{eachCategory.weight}</div>
                            </div>
                            <button onClick={() => deleteCatFromList(eachCategory.key)} className='CatRemoveButton'>x</button>
                        </div>
                        <GradeCategory updateScore={updateScore} category={eachCategory}/>
                    </div>
                ); 
                })}
            </div>
        </div>
    );
}

export default Home;
