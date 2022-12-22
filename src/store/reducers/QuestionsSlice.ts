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

const requestQuestions = async (question: string):Promise<any> => {
       return api.getQuestions(question)
      .then((res: any) => {
        if(!res){
          throw new Error("request failed");
        }
        return(res.data)
        })
        .catch((e)=>{
                throw new Error(e.message);
        });
};

export const loadQuestions = createAsyncThunk(
    "questions/getQuestions",
    async (queryString: string,thunkApi) => requestQuestions(queryString)
);

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
    setQuestions(state, action: PayloadAction<any>) {
      state.questionsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loadQuestions.fulfilled,(state,action) => {
      state.questionsData = action.payload;
      state.loading = "loaded";
      })
      .addCase(loadQuestions.rejected,(state,action) => {
        state.loading = "rejected"
      })
      .addCase(loadQuestions.pending,(state,action) => {
        state.loading = "pending";
      })
  }
});

export default questionsSlice.reducer;
