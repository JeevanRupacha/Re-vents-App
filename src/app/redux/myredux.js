import { createStore, combineReducers } from 'redux'



//action creater
const setNum = (number) => {

    return {
        type: 'SET_NUM',
        payload: {
            number: number
        }
    }
}

//reducers 
const addNum = (initNum = 0, action) => {
    if (action.type === 'SET_NUM') {
        return action.payload.number + 10
    }

    return initNum
}


//combine reducers 
const myReducers = combineReducers({
    addNum: addNum
})

const store = createStore(myReducers)

const action = setNum(10)

store.dispatch(action)

console.log(store.getState())
