import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700;
  margin: auto;
  
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  font-weight: 500;
  color: white;
  text-align: center;

  @media only screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
