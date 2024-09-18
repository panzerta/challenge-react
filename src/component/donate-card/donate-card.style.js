import styled, { css } from 'styled-components';

export const Card = styled.div`
  margin: 0px auto;
  width: 550px;
  height: 350px;
  background-image: url(${(props) => (props.$img)});
  background-size: 100% 100%;
  box-shadow: 3px 3px 5px 2px lightgray;
  border-radius: 6px;
  overflow: hidden;
  font-family: Sans-serif;
  border: none;

  @media (max-width: 1272px) {
    grid-template-columns: 1fr;
    width: 80%;
    height: unset;
    aspect-ratio: 550/350;
  }
`;

export const DonateCardBody = styled.div`
  transition: 0.5s;
  text-align: center;
  display: inline-block;
`

export const TrayBody = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  display: flex;
  position: relative;
  background-color: rgba(255,255,255,0.9);
  ${(props) => {
    if (props.$show) {
      return css`
        top: -75px;
      `
    }
    return css`
      top: calc(100% - 75px);
    `}
  };
`

export const TrayHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  position: relative;
  display: flex;
  transition: 0.3s;
  ${(props) => {
    if (props.$stretch) {
      return css`
        top: -75px;
      `
    }
    return css`
      top: calc(100% - 75px);
    `}
  };
`
export const CloseTrayButton = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 22px;
  line-height: 22px;
  cursor: pointer;
  color: var(--font-color-primary);
`
export const RadioSection = styled.p`
  display: flex;
  gap: 10px;
`
export const AlertMessage = styled.p`
`
export const AlertSection = styled.div`
  --width: 250px;
  box-sizing: border-box;
  width: var(--width);
  margin-top: 16px;
  position: absolute;
  top: 0px;
  text-align: center;
  left: calc(50% - var(--width) / 2);
  color: var(--font-color-primary);
  border-radius: 8px;
  display: ${(props) => (props.$show ? 'block' : 'none')};
`