import {createStore, applyMiddleware, PreloadedState} from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import rootSaga from "./rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';



const sagaMiddleware = createSagaMiddleware()
const bindMiddleware = (middleware: SagaMiddleware<object>) => {
    if (process.env.NODE_ENV !== "production") {
        return composeWithDevTools((applyMiddleware(middleware)))
    }
    return applyMiddleware(middleware)
}


const configureStore = (preloadedState: PreloadedState<any>) => createStore(
    rootReducer,
    preloadedState,
    bindMiddleware(sagaMiddleware)
)

export const store = configureStore({

})
sagaMiddleware.run(rootSaga)


