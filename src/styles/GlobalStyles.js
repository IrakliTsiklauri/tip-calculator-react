import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Space Mono", monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: rgba(79, 166, 175, 0.2);
}
`;
