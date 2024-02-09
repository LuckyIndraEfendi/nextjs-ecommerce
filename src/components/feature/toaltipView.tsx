import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoMdHelpCircle } from "react-icons/io";
const ToaltipView = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <IoMdHelpCircle className="text-2xl hover:cursor-pointer text-purple-600" />
        </TooltipTrigger>
        <TooltipContent
          className={cn("rounded-none border bg-popover px-0 py-0")}
        >
          <Image
            src="https://cdn1.codashop.com/S/content/common/images/helpers/33.png"
            alt=""
            width={500}
            height={400}
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToaltipView;
