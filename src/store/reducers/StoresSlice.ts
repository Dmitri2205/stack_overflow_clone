import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@API";

export interface IStoresState {
    stores: Array<any>;
    loading: "idle" | "pending" | "rejected" | "loaded"
}

const initialState: IStoresState = {
    stores:[],
    loading:"idle"

}

const getStores = async (coords: any):Promise<any> => {
       return api.getStoresAround(coords.bounds)
      .then((res: any) => {
        
        })
        .catch(()=>{
            throw new Error("error.message");
        });
};

export const loadStores = createAsyncThunk(
    "stores/getStores",
    async (coords: any,thunkApi) => getStores(coords)
);

export const storesSlice = createSlice({
    name:'stores',
    initialState,
    reducers: {
        setStores(state,action: PayloadAction<any>){
            state.stores = action.payload;
        },
        setStoreOffers(state,action: PayloadAction<any>){
            const {data,storeIndex} = action.payload;
            state.stores[storeIndex].offers = data;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadStores.fulfilled,(state,action) => {
            state.stores = action.payload;
        })
        .addCase(loadStores.rejected,(state,action) => {

        })
        .addCase(loadStores.pending,(state,action) => {

        })
    }
})

export default storesSlice.reducer;