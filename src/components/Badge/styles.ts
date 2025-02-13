import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    align-items: flex-end;
`;

export const Badge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secundary};
    color: ${({ theme }) => theme.colors.text};

    font-size: 0.7rem;
`;
