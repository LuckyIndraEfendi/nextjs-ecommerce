import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuBellDot } from "react-icons/lu";

const NotificationOver = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="notification-nav hover:cursor-pointer duration-200 p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] ">
          <LuBellDot className="text-white text-xl" />
        </div>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default NotificationOver;
