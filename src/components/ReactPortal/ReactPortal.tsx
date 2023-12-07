import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import {PortalContainer} from "./ReactPortal.elements";
import {ModalPortalProps} from "./ReactPortal.types";



export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const portalNode = document.querySelector('#root');

  useEffect(() => {
    if (portalNode) {
      document.body.appendChild(portalNode);
    }
  }, [portalNode]);

  return portalNode ? ReactDOM.createPortal(
    <PortalContainer>{children}</PortalContainer>,
    portalNode
  ) : null
};
