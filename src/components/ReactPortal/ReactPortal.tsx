import ReactDOM from "react-dom";
import React, { useEffect } from "react";

import { PortalContainer } from "./ReactPortal.elements";
import { ModalPortalProps } from "./ReactPortal.types";

export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const portalNode = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(portalNode);

    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

  return ReactDOM.createPortal(
    <PortalContainer>{children}</PortalContainer>,
    portalNode
  );
};
