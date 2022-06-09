function NavBar(props) {
    return (  
        <div className="NavBar">
            <nav>
                <p><b>You have entered <u>{props.gradeList.length}</u> grades</b></p>
            </nav>
        </div>
    );
}

export default NavBar;