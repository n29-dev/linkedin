import React, { useRef, useEffect } from "react";

function useClickOutside(userHandler) {
  const domNode = useRef();
  // checking if click is outside domNode or not

  function handler(event) {
    if (!domNode.current?.contains(event.target) && !domNode.current?.isEqualNode(event.target)) {
      userHandler();
    }
  }
  useEffect(() => {
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return domNode;
}

export default useClickOutside;
