const Header = ({showForm,onAdd}) =>{
    return(
    <header>
        <div className="logo">
            <h3>Task Tracker</h3>
        </div>
        <button className="btn" style={{backgroundColor:`${showForm ? "red" : "#3E7C17"} `}}  onClick={onAdd}>{showForm ? "close" : "Add"}</button>
    </header>
    );
}
export default Header;