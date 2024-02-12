import { createGlobalStyle } from "styled-components"
import { MyTheme } from "./Themes"


const GlobalStyles = createGlobalStyle<MyTheme> `
body{
    background-color:${(props)=> props.theme?.body}
}`

export default GlobalStyles


