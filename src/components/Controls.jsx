import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

privacyActions
const Controls=()=>{

  const inputElement=useRef();

  const dispatch=useDispatch();

  function handleIncrement(){
    dispatch(counterActions.increment());
  }

  function handleDecrement(){
    dispatch(counterActions.decrement());
  }
  function handleAdd(){
    
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value="";
  }

  function handleSubtract(){
    dispatch(counterActions.subtract({num:inputElement.current.value}));
    inputElement.current.value="";
  }

  function handlePrivacyToggle(){
       dispatch(privacyActions.privacyToggle());
       console.log("toogle clicked");
  }

  return <>    
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary" onClick={handleIncrement}  >
                +1
              </button>
              <button type="button" className="btn btn-success" onClick={handleDecrement}>
                -1
              </button>
              <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
              <input ref={inputElement} type="text" placeholder="Enter Your Number" />
              <button  type="button" className="btn btn-info" onClick={handleAdd}>ADD</button>
              <button type="button" className="btn btn-danger"  onClick={handleSubtract}>SUBTRACT</button>
            </div>

            </>
}

export default Controls;