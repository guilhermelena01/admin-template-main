import Link from "next/link"

interface MenuItemProps {
    texto: string;
    icone: any;
    url?: string;
    className?: string;
    onClick?: (evento: any) => void;
}

export default function MenuItem(props: MenuItemProps) {

    function renderizarLink() {
        return (
            <span className={`flex flex-col justify-center items-center text-gray-600 ${props.className}`}>
                {props.icone}
                <span className="text-xs font-light">
                    {props.texto}
                </span>
            </span>
        )
    }

    return (
        <article onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer ${props.className}`}>
            {props.url ?
                <Link href={props.url} className="no-underline">
                    {renderizarLink()}
                </Link> : (
                    renderizarLink()
                )
            }
        </article>
    )
}