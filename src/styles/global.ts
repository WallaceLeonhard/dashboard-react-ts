import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   html, body, #root {
     height: 100vh;
   }

   *,button, input {
      border: 0;
      outline: 0;
      font-family: 'Roboto', sans-serif;
   }

   button {
     cursor: pointer;
   }
`;
