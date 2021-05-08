import { useState } from 'react';
import Frame from './components/frame';
import Layout from './components/layout';
import './App.css';
function App() {
  const [ expression , setExpresssion ] = useState("");
  const handleChange = (e) => {
    switch(e.target.innerHTML){
      case "=":
        const answer = eval(expression) ;
        setExpresssion(answer);
        break;
      case "AC":
        setExpresssion("");
        break;
      case "DELETE":
        setExpresssion(expression.slice(0,-1));
        break;  
      default:
        setExpresssion(expression+e.target.innerHTML);break;
    }
  }
  const inputChange = ( e ) =>{
    setExpresssion(e.target.value);
  }
  const onSubmit = ( e ) => {
    e.preventDefault();
    const answer = eval(expression) ;
    setExpresssion(answer);
  }
  return (
    <div className="container">
      <div className = " row col-md-12">
        <div className = " card ">
            <div className = " card-header ">
              <Frame data = { expression } inputChange={inputChange} onDataSubmit={onSubmit} />
            </div>
            <div className = " card-body ">
                <Layout handleChange={handleChange} />
            </div>

        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
