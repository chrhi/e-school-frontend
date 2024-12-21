import React from "react";
import { User, Book, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface User {
  name: string;
  email: string;
  image?: string;
}

interface UserDropdownProps {
  user: User;
  onLogout?: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  user,
  onLogout = () => console.log("Logout clicked"),
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 outline-none">
        <Avatar className="h-8 w-8 ring-2 ring-offset-2 ring-offset-white ring-primary/10">
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64" sideOffset={5}>
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="font-medium text-gray-700">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <div className="py-2">
          <DropdownMenuItem className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-50 focus:bg-gray-50 transition-colors">
            <User className="mr-3 h-4 w-4 text-gray-500" />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-50 focus:bg-gray-50 transition-colors">
            <Book className="mr-3 h-4 w-4 text-gray-500" />
            <span>My Courses</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-50 focus:bg-gray-50 transition-colors">
            <Settings className="mr-3 h-4 w-4 text-gray-500" />
            <span>Settings</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        <div className="py-2">
          <DropdownMenuItem
            onClick={onLogout}
            className="flex items-center py-3 px-4 cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50 transition-colors"
          >
            <LogOut className="mr-3 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
