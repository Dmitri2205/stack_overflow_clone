import React, { useEffect, useState } from "react";
import { Head, Profile, Search, SearchButton, SearchWraper } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { api } from '@API';
import { useAppDispatch } from '@hooks/index';
import {questionsSlice}  from "../../store/reducers/QuestionsSlice";

const Header = (props: any) => {

  const {setQuestions} = questionsSlice.actions;
const dispatch = useAppDispatch();


  const [searchString,setsearchString] = useState<string>("");

  const searchInputHandler = (e:any) => {
    const value = e.target.value;
    setTimeout(()=>{
      setsearchString(value);
    },350)
  }

  const search = async (e:any) => {
    if(e.type === "keypress" && e.code === "Enter" || e.type === "click" && searchString.length !== 0){
      const {data}:any = await api.getQuestions(searchString);
      dispatch(setQuestions(data));
    }
  }

  return (
    <Head>
      <SearchWraper data-type="custom-input-wraper">
        <Search 
          placeholder="Type serach query"
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{searchInputHandler(e)}}
          onKeyPress={(e:React.KeyboardEvent<HTMLInputElement>)=>{search(e)}}
        />
        <SearchButton onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{search(e)}}>Go!</SearchButton>
      </SearchWraper>
      {/* <Profile></Profile> */}
    </Head>
  );
};

export default Header;
