import React from "react";
import styled from "styled-components";

const LoaderWraper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    position:fixed;
    margin:auto;
    &>div{
        border-radius:50%;
        display: block;
        width:100px;
        height:100px;
        border:3px solid cyan;
        border-bottom-color:transparent;
        animation: spin 1s linear infinite;
        @keyframes spin{
            from{
                transform:rotateZ(0deg);
            }
            to{
                transform: rotateZ(360deg);
            }
        }
    }
`

const Loader = () => {
    return(
        <LoaderWraper>
            <div></div>
        </LoaderWraper>    
    )
}
export default Loader;