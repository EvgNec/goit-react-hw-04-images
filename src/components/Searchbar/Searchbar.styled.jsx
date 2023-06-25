import styled from "@emotion/styled";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: 24px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: var(--bg-color);
  background-color: var(--theme-color);
  box-shadow: 0px 2px 5px rgb(0 0 0 / 12%);
`;
	
export const Form = styled.form`
  position: relative;
  margin-right: 0px;
`;

export const FormButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 0;
  border-radius: 50%;
  background-color: var(--theme-color);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    background-color: var(--theme-color-hover);
  }
`;

export const FormInput = styled.input`
  display: inline-block;
  padding: 10px 50px 10px 20px;
  font-size:24px;
  width: 400px;
  border: 0;
  border-radius: 25px;
  outline: none;
  background-color: var(--bg-color);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ::placeholder {
  color: var(--text-color);
  font: 16px/3 sans-serif;
  line-height: 1.5;
  }
`;