export default function SectionTitle(props) {
    return <h1 className={`${props.className} font-medium border-b w-fit text-xl mb-4`}>{props.text}</h1>
}