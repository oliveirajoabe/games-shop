import * as S from "./styles";
import SwitchComponent from "../Switch";
import { Moon, ShoppingCart, Sun, UserCircle } from "phosphor-react";
import { DefaultTheme } from "styled-components";
import Badge from "../Badge";

interface NavbarProps {
    toggleTheme: () => void;
    theme: DefaultTheme;
}
export default function Navbar({ toggleTheme, theme }: NavbarProps) {
    return (
        <S.Navbar>
            <S.ListUl className="full">
                <S.ItemList>
                    <S.LinkLogo to="/" className="logo">
                        Games Shop
                    </S.LinkLogo>
                </S.ItemList>
            </S.ListUl>
            <S.ListUl>
                <S.ItemList className="user">
                    <UserCircle size={30} />
                </S.ItemList>
                <S.ItemList>
                    <S.LinkStyle to="/cart">
                        <Badge quantity={5}>
                            <ShoppingCart size={30} className="icon-cart" />
                        </Badge>
                    </S.LinkStyle>
                </S.ItemList>
                <S.ItemList>
                    <SwitchComponent
                        checked={theme.title === "light"}
                        onChange={toggleTheme}
                        checkedIcon={<Sun size={20} />}
                        uncheckedIcon={<Moon size={20} />}
                        offColor="#08f"
                        onColor="#0ff"
                        offHandleColor="#0ff"
                        onHandleColor="#08f"
                    />
                </S.ItemList>
            </S.ListUl>
        </S.Navbar>
    );
}
