declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      license: string;
      author: string;
    };
    lastBuildTime: string;
  };

  type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
  };

  interface Window {
    /** ant design message instance */
    $message?: import("antd/es/message/interface").MessageInstance;
    /** ant design modal instance */
    $modal?: Omit<import("antd/es/modal/confirm").ModalStaticFunctions, "warn">;
    /** ant design notification instance */
    $notification?: import("antd/es/notification/interface").NotificationInstance;
  }
}

export {};
