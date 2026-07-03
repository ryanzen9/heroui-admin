import type { ButtonProps } from "antd";
import { Button } from "antd";
import type { ReactNode } from "react";

interface BasicButtonProps extends ButtonProps {
  children?: ReactNode;
}

export function BasicButton(props: BasicButtonProps) {
  const { children, ...restProps } = props;

  // 清除自定义属性
  const antdButtonProps: Partial<BasicButtonProps> = { ...restProps };

  return (
    <Button type="primary" {...antdButtonProps}>
      {children}
    </Button>
  );
}
