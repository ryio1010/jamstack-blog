import React from "react";
import HomeIcon from "@/components/molecules/home_icon";
import CodeIcon from "@/components/molecules/code_icon";
import DolarIcon from "@/components/molecules/dolar_icon";
import UserIcon from "@/components/molecules/user_icon";


const BottomNavigation = () => {
    return (
        <div className="w-full h-screen md:hidden">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                <div id="tabs" className="flex justify-between">
                    <HomeIcon/>
                    <CodeIcon/>
                    <DolarIcon/>
                    <UserIcon/>
                </div>
            </section>
        </div>
    )
}

export default BottomNavigation;