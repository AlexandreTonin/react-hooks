import { BsArrowRight } from "react-icons/bs";
import CodeText from "../CodeText/CodeText";

export default function Card(props) {
    return (
        <div className="flex flex-col gap-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] rounded p-4 min-h-full hover:bg-gray-100 transition cursor-pointer]">
            <div className="flex justify-between">
                <CodeText>
                    {props.title}
                </CodeText>
                <BsArrowRight className="text-[#404040]" />
            </div>
            <p className="text-[#b9b9b9]">{props.description}</p>
        </div>
    )
}