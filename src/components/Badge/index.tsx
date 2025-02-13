import { ReactNode } from "react";
import * as S from "./styles";

interface BadgeProps {
    children: ReactNode;
    quantity?: number;
}

export default function Badge({ children, quantity }: BadgeProps) {
    return (
        <S.Container>
            <div>{children}</div>
            {!!quantity && <S.Badge>{quantity}</S.Badge>}
        </S.Container>
    );
}
