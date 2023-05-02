import { useState } from 'react';

export const usePopup = () => {
  const [show, setShow] = useState(false);
  const showPopup = () => {
    setShow(true);
  };
  const closePopup = () => {
    setShow(false);
  };

  return { show, showPopup, closePopup };
};
