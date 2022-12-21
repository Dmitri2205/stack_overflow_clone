import React from "react";
import { MainSection, TBody, Table } from "./MainStyles";
import { useAppSelector } from '../../hooks/index';
import {questionsSlice} from '../../store/reducers/QuestionsSlice';

const Main = () => {
    const {questionsData} = useAppSelector((state=>state.questionsReducer)) 

    return(
        <MainSection>
            { questionsData.items?.length > 0 ?
                <h4>Found {questionsData.items.length}{questionsData.has_more ? "+" : null} results</h4>
                :
                null
            }
            <Table>
            <TBody>

                <tr>
                {
                ["Author","Topic","Ansvers","Tags"].map((_,i)=>{
                    return(
                        <th key={_}>{_}</th>
                        )
                    })
                }
                </tr>
                {
                    questionsData.items.length > 0 ?
                    questionsData.items.map((question)=>{
                        const {question_id,owner,answer_count,tags,title} = question;
                        return(
                            <tr key={question_id}>
                                <td>{owner.display_name}</td>
                                <td>{title}</td>
                                <td>{answer_count}</td>
                                <td>{tags.map((tag)=><span key={tag}>{tag}</span>)}</td>
                            </tr>
                        )
                    })
                    :
                    null
                }
                </TBody>
            </Table>
        </MainSection>
    )
}

export default Main;