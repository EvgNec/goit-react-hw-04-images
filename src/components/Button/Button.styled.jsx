import styled from '@emotion/styled';

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  padding: 8px 0;
  border-radius: 25px;
  background-color: var(--theme-color);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: var(--bg-color);
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 150px;

  :hover,
  :focus {
  background-color: var(--theme-color-hover);
  }
`;
