import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

const reducer = (state = 0, action) => {
  console.log(state, action)
  if (action.type === 'ADD') {
    return state + 1
  } else if (action.type === 'MINUS') {
    return state - 1
  } else {
    return state
  }
}

// createstore라는 함수는 reducer를 요구한다.
const countStore = createStore(reducer)

countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'MINUS' })

console.log(countStore.getState())
