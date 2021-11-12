import styled from "styled-components";
import utils from "../../../Utils/utils";
import Tom_Image from './Client-Photos/tom.jpg'
import Joan_Image from './Client-Photos/joan.jpg'
import Julia_Image from './Client-Photos/julia.jpg'
import Emily_Image from './Client-Photos/emily.jpg'
import Peter_Image from './Client-Photos/peter.jpg'



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

export const ClientBox = styled.div`
  display: flex;
  border-radius: 0.8em;
  border: 0.1em solid lightgrey;
  opacity:0.8;
  width: ${utils(320, 320)};
  min-height: ${utils(200, 320)};
  flex-direction: column;
  padding: ${utils(20)};
  margin: ${utils(20)};
  cursor: pointer;
  
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

export const ClientName = styled.h3`
  color: green;
  font-size: 2em;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 0.8em;
  }
`;

export const ClientReview = styled.p`
  margin-top: ${utils(20)};
  color: #053614;
  font-size: 1.5em;
  @media (min-width: 1024px) {
    font-size: 0.8em;
  }
`;

// CLient Images
export const TomImage = styled.div`
	display: flex;
	flex-direction: column;
	background-image: 
	url(${Tom_Image});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;
export const JoanImage = styled.div`
	display: flex;
	flex-direction: column;
	background-image: 
	url(${Joan_Image});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;
export const JuliaImage = styled.div`
	display: flex;
	flex-direction: column;
	background-image: 
	url(${Julia_Image});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;
export const EmilyImage = styled.div`
	display: flex;
	flex-direction: column;
	background-image: 
	url(${Emily_Image});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;
export const PeterImage = styled.div`
	display: flex;
	flex-direction: column;
	background-image: 
	url(${Peter_Image});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;
