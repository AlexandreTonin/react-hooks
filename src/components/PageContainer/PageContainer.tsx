export default function PageContainer(props) {
    return (
        <section className={`lg:px-0 px-4 py-4 lg:py-6 2xl:py-16 ${props.className}`}>
            {props.children}
        </section>

    )
}