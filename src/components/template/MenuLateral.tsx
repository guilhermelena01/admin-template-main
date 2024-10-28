import { IconHome, IconNotifications, IconSettings } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <>
            <aside>
                <ul>
                    <MenuItem url="/" texto="Inicio" icone={IconHome} />
                    <MenuItem url="/settings" texto="Ajustes" icone={IconSettings} />
                    <MenuItem url="/notifications" texto="Notificações" icone={IconNotifications} />
                </ul>
            </aside>
        </>
    )
}