import Link from "next/link"

interface MenuItemProps {
    url: string,
    texto: string,
    icone: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <article className="hover:bg-gray-200">
            <Link href={props.url} className="no-underline">
                <span className="flex flex-col justify-center items-center w-20 h-20">
                    {props.icone}
                    <span className="text-xs font-light text-gray-600">
                        {props.texto}
                    </span>
                </span>
            </Link>
        </article>
    )
}