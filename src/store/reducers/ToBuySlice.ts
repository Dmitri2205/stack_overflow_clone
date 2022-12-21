import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToBuyItem {
    

        name:string,
        current_prices: {
            price_reg__min: number,
            price_promo__min: number
        },
        img_link: string,
        store_name: string,
        id:number
}

export interface IToBuy {
    list: Array<ToBuyItem>
}

const initialState: IToBuy = {
    list:[]
}

export const toBuySlice = createSlice({
    name:'toBuy',
    initialState,
    reducers:{
        addToBuy(state,action:PayloadAction<any>){
            const {name,current_prices,img_link,store_name,id}: ToBuyItem = action.payload;
            state.list.push({name,current_prices,img_link,store_name,id});
        },
        removeToBuy(state,action:PayloadAction<any>){
            const {payload} = action;
            state.list = payload;
        }
    }
})

export default toBuySlice.reducer;