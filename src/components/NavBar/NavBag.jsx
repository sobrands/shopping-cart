import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavBag = () => {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <MdOutlineShoppingBag className="text-3xl" />
        </TooltipTrigger>
        <TooltipContent>
          <p>To be built!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavBag;
