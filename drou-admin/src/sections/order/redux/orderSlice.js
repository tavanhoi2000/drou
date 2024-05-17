import { createSlice } from "@reduxjs/toolkit";


const initialOrdersState = {
    listLoading: false,
    actionsLoading: false,
    lastError: null,
    error: null,
    orders: [],
    countOrders: 0,
}

export const callTypes = {
    list: 'list',
    action: 'action'
}


export const ordersSlice = createSlice({
    name: 'order',
    initialState: initialOrdersState,
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
        ordersFetched: (state, action) => {
            const {totalCount, data} = action.payload;
            state.listLoading = false;
            state.error = null;
            state.orders = data
            state.countOrders = totalCount
        },
        orderCreated: (state, action) => {
            state.actionsLoading = false;
            state.error = null;
            state.orders.push(action.payload.categories)
        }
    }
})