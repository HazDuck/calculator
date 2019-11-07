import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Calc = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <div className="calc-outer">
        <div className="calc-inner">
          <div className="display">
            <p className="display-text">{state.value1}</p>
          </div>
        <div className="button-container">
          <button
              className="button black" 
              onClick={() => dispatch({type:'clear'})} 
              key={"clear"}>
                C
          </button>
          <button
            className="button black" 
            onClick={() => dispatch({type:'del'})} 
            key={"del"}>
              del
          </button>
          <button
            className="button black"
            onClick={() => dispatch({type:'function', payload: "/"})} 
            key={"divide"}>
              /
          </button>
          <button
            className="button black"
            onClick={() => dispatch({type:'function', payload: "*"})} 
            key={"multi"}>
              *
          </button>
          <button
            className="button"
            onClick={() => dispatch({type:'function', payload: "+"})} 
            key={"+"}>
              +
          </button>
          <button
            className="button"
            onClick={() => dispatch({type:'function', payload: "-"})} 
            key={"minus"}>
              -
          </button>
          <button
            className="button"
            onClick={() => dispatch({type:'function', payload: "."})} 
            key={"point"}>
              .
          </button>
          {state.numberButtons.map(buttonValue => 
            <button
            className={"button " + "b" + buttonValue}
            onClick={() => dispatch({type:'addNumber', payload: buttonValue})} 
            key={buttonValue}>
              {buttonValue}
            </button>
          )}
          <button
            className="button equals orange"
            onClick={() => dispatch({type:'equals'})} 
            key={"equals"}>
              =
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Calc

