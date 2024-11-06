import { IconHome, IconLogout, IconNotifications, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <>
            <aside className="w-fit flex flex-col">
                <div className="flex flex-col justify-center items-center h-20 w-20 bg-purple-800">
                    <Logo />
                </div>
                <div className="flex-grow">
                    <MenuItem url="/" texto="Inicio" icone={IconHome} />
                    <MenuItem url="/settings" texto="Ajustes" icone={IconSettings} />
                    <MenuItem url="/notifications" texto="Notificações" icone={IconNotifications} />
                </div>
                <div>
                    <MenuItem
                        onClick={() => console.log("logout")}
                        texto="Logout"
                        icone={IconLogout} 
                        className="text-red-600 hover:bg-red-400 hover:text-white"
                        />
                </div>
            </aside>
        </>
    )
}