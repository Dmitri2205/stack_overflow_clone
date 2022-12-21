import styled, { keyframes } from "styled-components";
import { AppColors } from "@styles/global";

const {purple,transparent_purple} = AppColors;
const bRadius = 8;


export const Head = styled.header`
display:flex;
justify-content:space-between;
padding:16px 0;
`;

export const Profile = styled.div`
  display:flex;
  align-self:flex-end;
  border:1px solid cyan;
  border-radius:8px;
  max-width:152px;
  width:152px;
  height:36px;
  `;
  
  export const SearchWraper = styled.label`
  display:inline-flex;
  width:240px;
  height:28px;
  border-radius:${bRadius}px;
  border:1px solid ${purple};
  position:relative;
  z-index:0;
  box-sizing:border-box;
  `
  export const SearchButton = styled.button`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  width:2.5rem;
  height:100%;
  top:0;
  right:0;
  border:none;
  background:${transparent_purple};
  color:white;
  position:absolute;
  z-index:-1;
  border-top-right-radius:8px;
  border-bottom-right-radius:8px;
  &:focus{
    outline:0;
    border:0;
    box-shadow:0 0 0 .25rem ${transparent_purple};
  }
  `
  
  export const Search = styled.input`
  display:inline-flex;
  width:calc(100% - 8px);
  height:100%;
  line-height:22px;
  background:transparent;
  border:0;
  outline:0;
  color:white;
  outline:none;
  transition: all .3s linear;
  position:absolute;
  padding:0 0 0 8px;
  border-radius:8px;
  top:0;
  left:0;
  z-index:-2;
  &:focus{
    border-color:${purple};
    box-shadow:0 0 0 .25rem ${transparent_purple};
  }
  }
  &::after{
    content:"";
    display:inline-flex;
    width:50px;
    height:50px;
    border: 1px solid ${purple};

  }
`