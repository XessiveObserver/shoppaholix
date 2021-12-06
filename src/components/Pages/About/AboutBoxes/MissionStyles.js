import Mission_Image from '../../PageImages/mission.jpg'
import utils from "../../../Utils/utils";
import styled from "styled-components";


export const MissionImage = styled.div`
	display: flex;
	flex-direction: column;
	background-image:
	url(${Mission_Image});
	width:100%;
	height: 50vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
  border-radius: 0.8em;
  border: 0.2em solid #e8f3df;
`;

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

export const MissionBox = styled.div`
  display: flex;
  border-radius: 0.8em;
  opacity:0.8;
  width: ${utils(320, 320)};
  min-height: ${utils(200, 320)};
  flex-direction: column;
  padding: ${utils(20)};
  margin: ${utils(20)};
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

export const MissionTitle = styled.h3`
  color: #09515c;
  font-size: 2em;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;

export const MissionText = styled.p`
  margin-top: ${utils(20)};
  color: #311a09;
  font-size: 1.5em;
  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;

