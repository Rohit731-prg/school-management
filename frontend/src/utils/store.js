import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import NoticeReducer from '../features/Notice/NoticeSlice'
import LibraryReducer from '../features/LibraryList/LibrarySlice'
import ClassReducer from '../features/class/ClassSlice'
import ResultReducer from '../features/Result/ResultSlice'

const rootReducer = combineReducers({
  Notice: NoticeReducer,
  Library: LibraryReducer,
  Class: ClassReducer,
  Result: ResultReducer,
  role: (state = { value: '' }, action) => {
    switch (action.type) {
      case 'ASSIGN_ROLE':
        return { value: action.payload }
      default:
        return state;
    }
  },
  name: (state = { value: '' }, action) => {
    switch (action.type) {
      case 'ASSIGN_NAME':
        return { value: action.payload }
      default:
        return state;
    }
  }
});

export const store = configureStore({
  reducer: rootReducer
});
