export default function FloatingButton(props) {
    return (
        <div className="bg-white shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] p-2 rounded-full">
            <a href={props.href} target="_blank">
                {props.children}
            </a>
        </div>
    )
}