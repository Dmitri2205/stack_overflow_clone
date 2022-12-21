import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  Suspense,
} from "react";
import { Layout } from "@modules/Layout";
import { AppWrapper } from "@styles/AppStyles";
import { api } from '@API';



export default function App() {

  // useEffect(()=>{
  //   api.testRequest().then((response)=>console.log(response))
  // },[])

  return (
    <AppWrapper>
      <Layout/>
    </AppWrapper>
  );
}
