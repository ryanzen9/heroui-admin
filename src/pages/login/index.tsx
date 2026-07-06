import logo from "#src/assets/svg/logo.svg?url";

import { Col, Row, theme } from "antd";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { usePreferences } from "@/hooks/use-preferences";
import { LanguageButton } from "@/layouts/layout-header/components/language-button";
import { ThemeButton } from "@/layouts/layout-header/components/theme-button";

import { FORM_COMPONENT_MAP } from "./constants";
import { FormComponentMapType, FormModeContext } from "./form-mode-context";

export default function Login() {
  const { isDark } = usePreferences();
  //   const { pageLayout, layoutButtonTrigger } = useLayoutMenu();
  const { token } = theme.useToken();
  const [formMode, setFormMode] = useState<FormComponentMapType>("login");

  const providedValue = useMemo(
    () => ({ formMode, setFormMode }),
    [formMode, setFormMode],
  );
  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
      }}
      className="flex h-full w-full flex-col items-center justify-center overflow-hidden"
    >
      <header className="z-10 absolute flex items-center right-3 top-3 left-3">
        <div className="text-colorText flex flex-1 items-center">
          <img alt="App Logo" src={logo} className="mr-2 w-11" />
          <h1 className="m-0 text-xl font-medium">
            {import.meta.env.VITE_GLOB_APP_TITLE}
          </h1>
        </div>
        <div className="flex items-center">
          <ThemeButton size="large" />
          <LanguageButton size="large" className="px-2.75" />
        </div>
      </header>

      <div>
        <Row className="h-screen w-full">
          <Col className="relative flex flex-col justify-center px-6 py-10 xl:px-8">
            <div className="w-full sm:mx-auto md:max-w-md border border-solid">
              <FormModeContext value={providedValue}>
                <AnimatePresence mode="wait" initial={false}>
                  {/* initial 进入状态， animate 最终状态， exit 退出状态  transition motion 相关动画配置项 */}
                  {/* motion.div 动画配置 */}
                  <motion.div
                    key={formMode}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {FORM_COMPONENT_MAP[formMode]}
                  </motion.div>
                </AnimatePresence>
              </FormModeContext>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
