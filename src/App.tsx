import { ThemeProvider } from "styled-components";

import { GlobalStyle, defaultTheme } from "./styles";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

      </ThemeProvider>
    </div>
  )
}
