import { createSlice } from "@reduxjs/toolkit";


const initialHomeState = {
    listLoading: false,
    actionsLoading: false,
    lastError: null,
    error: null,
    products: [],
    countProducts: 0,
    categories: [],
    latestProducts: [],
}

export const callTypes = {
    list: 'list',
    action: 'action'
}


export const homeSlice = createSlice({
    name: 'home',
    initialState: initialHomeState,
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
        productsFetched: (state, action) => {
            const {totalCount, data} = action.payload;
            state.listLoading = false;
            state.error = null;
            state.products = data
            state.countProducts = totalCount
        },
        latestProductsFetched: (state, action) => {
            const { data } = action.payload;
            state.listLoading = false;
            state.error = null;
            state.latestProducts = data
        },
        categoriesFetched : (state, action) => {
            const {data} = action.payload
            state.listLoading = false;
            state.error = null;
            state.categories = data
        }
    }
})
