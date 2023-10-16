"use client";

import { StoreModal } from "@/components/modals/store-modal";

import { useState, useEffect } from "react";

export const ModalProvider = () => {
  const [ismounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!ismounted) {
    return null;
  }
  return (
    <>
      <StoreModal />
    </>
  );
};
