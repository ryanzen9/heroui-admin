import { createElement, ReactElement } from "react";
import { PasswordLogin } from "./components/pasword-login";
import { FormComponentMapType } from "./form-mode-context";

export const FORM_COMPONENT_MAP: Partial<
  Record<FormComponentMapType, ReactElement>
> = {
  login: createElement(PasswordLogin),
};
