const Frame = ({data,inputChange,onDataSubmit}) =>{
    return(
        <form onSubmit={onDataSubmit}>
            <input type="text" className = " form-control " onChange = {inputChange} value = { data ?data : ""}/>
        </form>
    );
}
export default Frame;