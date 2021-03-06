import React, { useState } from "react";
import styled from "styled-components";
import { categori } from "../../data/data";
const SearchSelect = (props: any) => {
  const selectChange = (e: any) => {
    props.option(e.target.value);
  };
  return (
    <SelectDiv>
      <SelectTag value={props.value} onChange={selectChange}>
        <option>=카테고리선택=</option>
        {categori.map((el: any) => {
          return (
            <option key={el.index} value={el.name}>
              {el.name}
            </option>
          );
        })}
      </SelectTag>
    </SelectDiv>
  );
};
const SelectDiv = styled.div`
  display: block;
  width: 90%;
  height: 29.6px;
  font-size: 13px;

  margin-bottom: 5px;
`;
const SelectTag = styled.select`
  width: 100%;
  height: 100%;
  color: #717171;
`;
export default SearchSelect;
