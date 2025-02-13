import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import light from "../../styles/themes/light";
import usePersistedState from "../../hooks/usePersistedState";
import dark from "../../styles/themes/dark";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import * as S from "./styles";

export default function DefaultLayout() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <S.Container>
                <Outlet />
            </S.Container>
            <GlobalStyle />
        </ThemeProvider>
    );
}
