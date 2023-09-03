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

      .loader {
   --dim: 3rem;
   width: var(--dim);
   height: var(--dim);
   position: relative;
   animation: spin988 2s linear infinite;
   margin: 12rem auto;
   }

   .loader .circle {
   --color: var(--color-secondary);
   --dim: 1.2rem;
   width: var(--dim);
   height: var(--dim);
   background-color: var(--color);
   border-radius: 50%;
   position: absolute;
   }

   .loader .circle:nth-child(1) {
   top: 0;
   left: 0;
   }

   .loader .circle:nth-child(2) {
   top: 0;
   right: 0;
   }

   .loader .circle:nth-child(3) {
   bottom: 0;
   left: 0;
   }

   .loader .circle:nth-child(4) {
   bottom: 0;
   right: 0;
   }

   @keyframes spin988 {
   0% {
      transform: scale(1) rotate(0);
   }

   20%, 25% {
      transform: scale(1.3) rotate(90deg);
   }

   45%, 50% {
      transform: scale(1) rotate(180deg);
   }

   70%, 75% {
      transform: scale(1.3) rotate(270deg);
   }

   95%, 100% {
      transform: scale(1) rotate(360deg);
   }

  }

   .content .sci {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 8px;
   margin-top: 5px;
   }
   
   .active {
    background-color: var(--color-secondary);
    color: var(--color-white-light);
    border-right: 7px solid var(--color-primary);
  }
   
   .votes {
      color: var(--color-dark-tertiary);
   }

   .actions button,
   select {
   text-transform: uppercase;
   padding: 0.8rem 2.4rem;
   font-size: 1.4rem;
   font-weight: 700;
   margin: 0 0.8rem;
   }

    select{
      background-color: #2b938f;
    }

    select:hover option{
      background-color: var(--color-secondary)
    }
`;
