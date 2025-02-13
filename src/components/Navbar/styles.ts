import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    padding: 0.5rem 3rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secundary};
`;

export const WrapperRights = styled.div`
    display: flex;
    align-items: center;
`;

export const ListUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
`;

export const ItemList = styled.li`
    height: 100%;

    &.user {
        display: flex;
        align-items: center;
    }
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;

    .icon-cart {
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const LinkLogo = styled(Link)`
    font-family: "Darumadrop One";
    font-size: 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
`;
