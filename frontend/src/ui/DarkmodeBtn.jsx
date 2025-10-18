'use client';
import { useDarkmode } from "context/DarkModeContext";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";

function DarkmodeBtn() {
    const { isDarkmode, toggleTheme } = useDarkmode();
    return (
        <div
            onClick={toggleTheme}
            className="bg-secondary-0 cursor-pointer rounded-xl p-2 flex items-center justify-center">
            {
                isDarkmode ? <IoSunnyOutline className="w-6 h-6 text-secondary-800" />
                    : <FiMoon className="w-6 h-6 text-secondary-800" />
            }


        </div>
    )
}

export default DarkmodeBtn
