import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/rootReducer';
import rootSaga from '../saga/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = (perloadState = {}) => {
    const store = createStore(
        rootReducer,
        perloadState,
        composeWithDevTools(
            applyMiddleware(
               sagaMiddleware 
            )
        )
    );
    sagaMiddleware.run(rootSaga);
    return { store }
}

export default configureStore;