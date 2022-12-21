import styled from "styled-components";
import { AppColors } from "@styles/global";

const {purple,transparent_purple,cream} = AppColors;

export const MainSection = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    &>h4{
        margin:0;
        padding: 24px 0;
    }
    `
    
    export const Table = styled.table`
    display:table;
    width:100%;
    height:auto;
    border: 1px solid ${purple};
    border-radius:12px;
`;

export const TBody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    &>tr{
        transition: all .3s ease-in-out;
    }
    &>tr:first-child{
        text-align:left;
        &>th{
            border-bottom:1px dashed ${purple};
        }
    }
    &>tr{
        &>td{
            padding-left:8px;
        }
        &:nth-child(2n+2){
            background: ${transparent_purple};
        }
    }
    &>tr:not(:first-child){
        width: 25%;
        &:hover{
            background: ${purple};
        }
        &>td:first-child{
            width:10%;
        }
        &>td:nth-child(2){
            width:40%;
        }
        &>td:nth-child(3){
            width:10%;
            text-align:center;
            padding: 0;
        }
        &>td:last-child{
            &>span:not(:last-child){
                margin-right:8px;
                color:${cream}
            }
        }
    }
`