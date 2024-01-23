import Link from "next/link";
import React from 'react';
import { Commands } from "./Commands";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`fixed top-0 left-0 h-screen w-50 bg-white text-black p-5 border-r ${className}`}>
    <Commands>

    </Commands>
    </div>
  );
};

export default Sidebar;
