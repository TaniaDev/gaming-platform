import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
    background: #000000;
    color: #e1e1e6;
}
`
