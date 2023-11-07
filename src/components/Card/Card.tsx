export default function Card(props) {
    return (
        <div className="flex flex-col gap-2 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] rounded p-4 min-h-full hover:bg-gray-100 transition cursor-pointer">
            <div className="flex justify-between">
                <h1 className="italic">{props.title}</h1>
            </div>
            <p className="text-[#b9b9b9]">{props.description}</p>
            <div className="flex justify-end mt-4">
                <a href="#" className="rounded-full border border-sky-400 px-2 py-1 w-fit text-xs bg-sky-200 text-sky-600 hover:bg-sky-100 transition">Visualizar</a>
            </div>
        </div>
    )
}