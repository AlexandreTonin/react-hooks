export default function CodeText(props) {
    return (<code><mark className="py-0.5 px-2 rounded bg-[#F7F6F3] text-blue-500">{props.children}</mark></code>);
}