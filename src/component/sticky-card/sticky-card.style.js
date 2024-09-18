import styled from 'styled-components';

export const Card = styled.div`
  position: fixed;
  display: inline-block;
  top: ${(props) => (props.$top)}px;
  right: 0px;
  padding: 12px;
  padding-left: 35px;
  padding-right: 20px;
  background-color: white;
  border: 3px solid white;
  border-right: 0px;
  z-index: 10;
  border-left: 0px;
  box-shadow: 1px 2px 4px 0px lightgray;
  transition: 0.3s;
  transform: translateX(${(props) => (props.$show ? 0 : 130)}px);
  cursor: pointer;

  &:before {
    content: '';
    width: 0;
    position: absolute;
    left: -48px;
    top: -2.5px;
  
    border-bottom: solid 24px transparent;
    border-top: solid 24px var(--border-primary);
    border-left: solid 25px transparent;
    border-right: solid 25px transparent;
    transform: rotate(90deg);
  }

  &:after {
    content: '';
    position: absolute;
    left: -37px;
    top: 0.5px;
    transform: rotate(90deg);
    border-bottom: solid 21px transparent;
    border-top: solid 21px white;
    border-left: solid 22px transparent;
    border-right: solid 22px transparent;
  }

`

export const Text = styled.label`
  cursor: pointer;
  font-family: Sans-serif;
  color: var(--font-color-primary);
`