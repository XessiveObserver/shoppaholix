import styled from "styled-components";
import utils from "../../../Utils/utils";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${utils(32)};
  max-width: 100%;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  border-radius: 0.8em;
  border: 0.1em solid #eee7e0;
  opacity:0.8;
  width: ${utils(320, 320)};
  min-height: ${utils(200, 320)};
  flex-direction: column;
  padding: ${utils(20)};
  margin: ${utils(20)};
  cursor: pointer;
  background-color: #f8f4f4;
  
  height: 100%;
  @media (min-width: 768px) {
    width: ${utils(320, 768)};
    min-height: ${utils(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${utils(500)};
    min-height: ${utils(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2em;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;

export const BoxText = styled.p`
  margin-top: ${utils(20)};
  color: #666;
  font-size: 1.5em;
  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;