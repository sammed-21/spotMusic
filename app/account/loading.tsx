"use client";
import { Box } from "@radix-ui/themes";
import React from "react";
import { BounceLoader } from "react-spinners";

type Props = {};

const loading = (props: Props) => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#33c55e" size={40} />
    </Box>
  );
};

export default loading;
