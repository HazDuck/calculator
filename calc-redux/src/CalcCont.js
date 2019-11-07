import React from 'react';
import { store } from './App'
import { connect } from 'react-redux'
import Calc from './Calc'

const CalcCont = (props) => {

  return (
    <div>
      <Calc props/>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     value: state.value
//   }
// }

export default CalcCont
