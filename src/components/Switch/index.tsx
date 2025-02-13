import Switch, { ReactSwitchProps } from "react-switch";
import * as S from "./styles";

export default function SwitchComponent({
    checkedIcon,
    uncheckedIcon,
    ...rest
}: ReactSwitchProps) {
    return (
        <Switch
            {...rest}
            checkedIcon={
                checkedIcon && <S.WrapperIcon>{checkedIcon}</S.WrapperIcon>
            }
            uncheckedIcon={
                uncheckedIcon && <S.WrapperIcon>{uncheckedIcon}</S.WrapperIcon>
            }
        />
    );
}
