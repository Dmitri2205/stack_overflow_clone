import React from "react";
import { MainSection, TBody, Table } from "./MainStyles";
import { useAppSelector } from "../../hooks/index";
import { questionsSlice } from "../../store/reducers/QuestionsSlice";
import { FixedSizeList as List } from "react-window";
import Loader from "@modules/Loader";

const Main = () => {
  const { questionsData, loading } = useAppSelector((state) => state.questionsReducer);

  const tableRow = () => {
    return questionsData.items.map((question) => {
      const { question_id, owner, title, answer_count, tags } = question;
      return (
        <tr key={question_id}>
          <td>{owner.display_name}</td>
          <td>{title}</td>
          <td>{answer_count}</td>
          <td>
            {tags.map((tag: any) => (
              <span key={tag}>{tag}</span>
            ))}
          </td>
        </tr>
      );
    });
  };

  return (
    <MainSection>
    {
        loading === "idle" ?
        <h3>No query provided yet🤷‍♂️</h3>
        :
        loading === "pending" ? 
        <Loader />
        : 
        loading === "rejected" ?
        <h3>Something went wrong</h3>
        : 
        loading === "loaded" && questionsData.items.length > 0 ?
        <>
        <h4>
            Found {questionsData.items.length}{questionsData.has_more ? "+" : null} results
        </h4>
        <Table>
            <TBody>
            <tr>
                {["Author", "Topic", "Answers", "Tags"].map((_, i) => {
                return <th key={_}>{_}</th>;
                })}
            </tr>

            {tableRow()}
            </TBody>
        </Table>
        </>
        :
        null
    }
    </MainSection>
  );
};

export default Main;
