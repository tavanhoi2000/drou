import { createSlice } from "@reduxjs/toolkit";


const initialCategoriesState = {
    listLoading: false,
    actionsLoading: false,
    lastError: null,
    error: null,
    categories: [],
    countCategories: 0,
}

export const callTypes = {
    list: 'list',
    action: 'action'
}


export const categorySlice = createSlice({
    name: 'category',
    initialState: initialCategoriesState,
    reducers: {
        catchError: (state, action) => {
            state.error = `${action.type}: ${action.payload.error}`;
            if(action.payload.callTypes === callTypes.list) {
                state.listLoading = false;
            } else if (action.payload.callTypes === callTypes.action) {
                state.actionsLoading = false;
            } else {
                state.importLoading = false
            }
        },
        startCall: (state, action) => {
            state.error = null;
            if(action.payload.callTypes === callTypes.list) {
                state.listLoading = true;
            } else if (action.payload.callTypes === callTypes.action) {
                state.actionsLoading = true;
            } else {
                state.importLoading = true
            }
        },
        endCall: (state, action) => {
            state.error = null;
            if (action.payload.callType === callTypes.list) {
              state.listLoading = false;
            } else if (action.payload.callType === callTypes.action) {
              state.actionsLoading = false;
            } else {
              state.importLoading = false;
            }
          },
        categoriesFetched: (state, action) => {
            const {totalCount, data} = action.payload;
            state.listLoading = false;
            state.error = null;
            state.categories = data
            state.countCategories = totalCount
        },
        categoryCreated: (state, action) => {
            state.actionsLoading = false;
            state.error = null;
            state.categories.push(action.payload.categories)
        }
    }
})