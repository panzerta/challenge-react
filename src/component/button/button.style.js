import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background-color: white;
  border: solid 1px var(--border-primary);
  display: inline-block;
  height: 26px;
  min-width: 50px;
  border-radius: 4px;
  cursor: pointer;
  color:  var(--font-color-primary);
  transition: 0.2s;
  box-shadow: 0px 0px 0px 1px rgba(27, 27, 218, 0.29);

  &:hover {
    color: white;
    border-color: white;
    background-color: rgba(0, 0, 246, 0.65);
    box-shadow: 0px 0px 0px 4px rgba(27, 27, 218, 0.29);
  }

  background-color: ${(props) => (props.$disable ? 'red' : 'green')};
  ${(props) => {
    if (props.$disable) {
      return css`
        color: var(--button-disable-primary);
        border: solid 1px var(--button-disable-primary);
        background-color: white;
        box-shadow: none;
        &:hover {
          color: var(--button-disable-primary);
          border: solid 1px var(--button-disable-primary);
          background-color: white;
          box-shadow: none;
        }
        cursor: not-allowed;
      `
    }
    return css`
      color: var(--font-color-primary);
      background-color: white;
      border: solid 1px var(--border-primary);
    `}
  };
`