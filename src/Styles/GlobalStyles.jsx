import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root {
   --color-primary: #3DD2CC;
   --color-secondary: #276361;

   --color-dark-primary: #191919;
   --color-dark-secondary: #212121;
   --color-dark-tertiary: #666666;

   --color-white: #fff;
   --color-white-light: #d2d1d1;

   --font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
   line-height: 1.5;
   --color-scheme: light dark;


   --font-weight-sm: 400;
   --font-weight-md: 500;
   --font-weight-xm: 600;
   --font-weight-lg: 700;


   
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   -webkit-text-size-adjust: 100%;

   --backdrop-color: rgba(255, 255, 255, 0.1);

   --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
   --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
   --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

   --border-radius-tiny: 5px;
   --border-radius-sm: 7px;
   --border-radius-md: 9px;
   --border-radius-lg: 12px;
   --border-radius-xlg: 20px;
   --border-radius-rounded: 50%;

   /* For dark mode */
   --image-grayscale: 0;
   --image-opacity: 100%;
   }




   *,
   *::before,
   *::after {
   box-sizing: border-box;
   padding: 0;
   margin: 0;

   /* Creating animations for dark mode */
   transition: background-color 0.4s, border 0.3s;
   }

   html {
   font-size: 62.5%;
   }

   body {
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   transition: color 0.3s, background-color 0.3s;
   /* min-height: 100vh; */
   line-height: 1.5;
   background-color: #191919;
   color: var(--color-white-light);
   }

   input,
   button,
   textarea,
   select {
   font: inherit;
   color: inherit;
   }

   button {
   cursor: pointer;
   }

   *:disabled {
   cursor: not-allowed;
   }

   select:disabled,
   input:disabled {
   background-color: var(--color-grey-200);
   color: var(--color-grey-500);
   }

   input:focus,
   button:focus,
   textarea:focus,
   select:focus {
   outline: 2px solid var(--color-brand-600);
   outline-offset: -1px;
   }

   /* Parent selector, finally 😃 */
   button:has(svg) {
   line-height: 0;
   }

   a {
   color: inherit;
   text-decoration: none;
   }

   ul {
   list-style: none;
   }

   p,
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   overflow-wrap: break-word;
   hyphens: auto;
   }

   img {
   max-width: 100%;

   /* For dark mode */
   filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
   }

   .sidelink-icon {
      font-size: 1.8rem;
      padding-top: 5px;
   }
   
   .start-watching-heading {
      font-size: 1.4rem;
      font-weight: var(--font-weight-xm);
   }

   .start-watching-count {
      font-size: 1.2rem;   
      color: var(--color-dark-tertiary);
   }

   .watching-icon {
      height: 3.5rem;
   }

   .input-search-icon {
      font-size: 2rem;
      padding-top: 5px;
   }

   .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`;
