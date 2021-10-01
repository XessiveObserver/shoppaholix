import styled from "styled-components";
import px2vw from "../Utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
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
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  cursor: pointer;
  background-color: #f8f4f4;
  &:hover{
    background-color: ${props => props.bgColor};
  }
  height: 100%;
  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 3em;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 2em;
  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;