
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case 'addNumber':
      return { ...state, value1: state.value1 + action.payload }
  
    case 'function':
        return { ...state, value1: state.value1 + action.payload }
      
    case 'equals':
      try {
        return {...state, value1: eval(state.value1)}
      } catch (error) {
        alert('thats not maffs')
        return {...state, value1: state.value1}
      }
    
    case 'del':
        const removeLast = state.value1.slice(0, -1)
      return {...state, value1: removeLast }

    case 'clear':
      return {...state, value1: ""}
    
    default:
      return state
      }
    }
    
const initialState = {
  value1: "",
  numberButtons: ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"],
  // functionButtons: ["+","-","*","/"]
}

export { calculator,  initialState }
