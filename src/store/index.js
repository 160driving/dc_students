import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer as AuthReducer } from './models/auth';
import { reducer as DashboardReducer } from './models/dashboard';
import { reducer as JobsReducer } from './models/jobs';
import { reducer as ChatsReducer } from './models/chats';

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
  jobs: JobsReducer,
  chats: ChatsReducer
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  return {
    ...createStore(rootReducer, applyMiddleware(...middlewares)),
    runSaga: sagaMiddleware.run
  };
}
