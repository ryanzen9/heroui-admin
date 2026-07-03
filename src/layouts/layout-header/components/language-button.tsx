import type { ButtonProps, MenuProps } from "antd";

import { BasicButton } from "@/components/basic-button";
import { useLanguage } from "@/hooks/use-language";
import { LanguageType } from "@/i18n/types";
import { TranslationOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

export function LanguageButton({ ...restProps }: ButtonProps) {
  const { language, setLanguage } = useLanguage();

  // FIXME 临时代替
  const items: MenuProps["items"] = [
    {
      label: "简体中文",
      // Menu
      key: "zh-CN",
    },
    {
      label: "English",
      // Menu
      key: "en-US",
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setLanguage(key as LanguageType);
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick,
        selectable: true,
        selectedKeys: [language],
      }}
      trigger={["click"]}
      arrow={false}
      placement="bottom"
    >
      <BasicButton type="text" {...restProps}>
        <TranslationOutlined />
      </BasicButton>
    </Dropdown>
  );
}
