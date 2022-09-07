import styled from "styled-components";

interface IButtonProps {
  buttonStyle: string;
}

const Button = styled.button<IButtonProps>`
  background-color: ${(props) =>
    props.buttonStyle === "success" ? "rgb(108, 167,108" : "rgb(82, 122, 223)"};
  border-radius: 50px;
  padding: 30px;
  font-size: 20px;
  color: white;
  border: none;
  cursor: pointer;
`;

export default Button;
