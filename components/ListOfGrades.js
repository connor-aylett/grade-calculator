function ListOfGrades(props) {

const deleteGradeFromList = key => {
    const newGradeList = props.gradeList.filter(eachGrade=>{
            return eachGrade.key != key;
    })
    props.updateGradeList(newGradeList);
}

    return (
        <div>
            {props.gradeList.map(eachGrade => {
               return(
                <div key={eachGrade.key}>
                    <p><b>{eachGrade.title} --- </b> {eachGrade.grade}/{eachGrade.maxpts}
                    &nbsp;&nbsp; <button onClick={() => deleteGradeFromList(eachGrade.key)}> x</button>
                    </p>
                    
                </div>
               ); 
            })}
        </div>
    );
}

export default ListOfGrades;