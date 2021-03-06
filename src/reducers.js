import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todoList from './modules/todoList/reducer'
import board from './modules/taskList/reducer'

const rootReducer = combineReducers({
  todoList,
  board,
  routing: routerReducer,
})

export default rootReducer
