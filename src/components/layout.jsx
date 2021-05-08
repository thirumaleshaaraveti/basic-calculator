const Layout = ({handleChange})=>{
    return(
    	<div>
          <div classname="row">
                  <button className= "  btn btn-danger btn-lg col-md-6  col-6  m-1 clr" onClick={handleChange}>AC</button>
                  <button className= " del btn btn-secondary btn-lg col-md-5 col-5  m-1" onClick={handleChange}>DELETE</button>
                </div>
    			<div classname="row">
                  <button  className= " btn btn-primary btn-lg   m-1"  onClick={handleChange}>1</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>2</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>3</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>+</button>
                </div>
                <div classname="row">
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>4</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>5</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>6</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>-</button>
                </div>
                <div classname="row">
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>7</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>8</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>9</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>*</button>
                </div>
                <div classname="row">
                  <button className= " btn btn-primary btn-lg  m-1 " onClick={handleChange}>/</button>
                  <button className= " btn btn-primary btn-lg  m-1 " onClick={handleChange}>0</button>
                  <button className= " btn btn-primary btn-lg  m-1" onClick={handleChange}>.</button>
                  <button className= " btn btn-success btn-lg  m-1" onClick={handleChange}>=</button>
                </div>
         </div>       
        
    );
}
export default Layout ; 