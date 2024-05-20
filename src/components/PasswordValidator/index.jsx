import { useState } from "react";
import {
  Card,
  ErrorMsg,
  MainConatiner,
  MainHeading,
  MainPara,
  PasswordField,
} from "./styledComponents";
function PasswordValidator() {
  const [password, setPassword] = useState("");

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  function isValid() {
    return password.length >= 8 ? true : false;
  }
  return (
    <MainConatiner>
      <Card>
        <MainHeading>Password Validator</MainHeading>
        <MainPara>check how strong and secure your password </MainPara>
        <PasswordField
          value={password}
          type="password"
          onChange={onChangePassword}
        />
        <ErrorMsg>
          {!isValid() && "Your password must
          be atleast 8 characters"}
        </ErrorMsg>
      </Card>
    </MainConatiner>
  );
}

export default PasswordValidator;
