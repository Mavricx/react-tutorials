1. 1st: create a store. single source of truth. and configure it with reducers.
2. 2nd:make reducers in feature /here todoSlice.js and make and describe the reducers inside createSlice. Each reducer have access to state and actions. And export all the reducers.
3. 3rd:go to components and see whether we need to add new value or use the existing value in the store.
   > to send new value use 'useDispatch()'
   > to use the existing value use 'useSelector()'
