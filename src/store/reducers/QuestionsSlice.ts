import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@API";

interface IQuestion{
  answer_count: number;
  body: string;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  last_edit_date: number;
  link: string;
  owner: {
      account_id: number;
      reputation: number;
      user_id: number;
      user_type: string;
      display_name: string;
      profile_image: string;
    };
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
};

export interface IQuestionsState {
  questionsData: {
    items: Array<IQuestion>;
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
  };
  loading: "idle" | "pending" | "rejected" | "loaded";
}

const initialState:IQuestionsState = {
    questionsData: {
        items: [],
        has_more: false,
        quota_max: 0,
        quota_remaining: 0,
    },
  loading: "idle",
};

// const getQuestions = async (data: any):Promise<any> => {
    //    return api.getQuestionsRequest(data.some_param)
    //   .then((res: any) => {
        
        //     })
        //     .catch(()=>{
            //         throw new Error("error.message");
            //     });
// };

// export const loadStores = createAsyncThunk(
//     "questions/getQuestions",
//     async (data: any,thunkApi) => getQuestions(data)
// );

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
    setQuestions(state, action: PayloadAction<any>) {
      state.questionsData = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //     builder
  //     .addCase(loadStores.fulfilled,(state,action) => {
  //         state.stores = action.payload;
  //     })
  //     .addCase(loadStores.rejected,(state,action) => {

  //     })
  //     .addCase(loadStores.pending,(state,action) => {

  //     })
  // }
});

export default questionsSlice.reducer;
