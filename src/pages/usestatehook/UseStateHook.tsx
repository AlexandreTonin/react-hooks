import BackToGalleryButton from "../../components/BackToGalleryButton/BackToGalleryButton"
import CodeArea from "../../components/CodeArea/CodeArea"
import CodeText from "../../components/CodeText/CodeText"
import Content from "../../components/Content/Content"
import ContentImage from "../../components/ContentImage/ContentImage"
import PageContainer from "../../components/PageContainer/PageContainer"
import SectionTitle from "../../components/SectionTitle/SectionTitle"


export default function UseStateHook() {
    return (
        <PageContainer>
            <BackToGalleryButton />
            <SectionTitle text="useState Hook" />
            <Content>
                Lorem ipsum <CodeText>sit</CodeText> amet consectetur<code> adipisicing elit.</code> <CodeText>Qui laboriosam tenetur earum</CodeText> quisquam nulla, ipsa minima explicabo tempora odio iure nemo atque dolor fuga delectus, totam expedita cupiditate natus. Itaque.
            </Content>
            <CodeArea code={`
console.log("teste")
            `} />
            <Content>
                Lorem ipsum <CodeText>sit</CodeText> amet consectetur<code> adipisicing elit.</code> <CodeText>Qui laboriosam tenetur earum</CodeText> quisquam nulla, ipsa minima explicabo tempora odio iure nemo atque dolor fuga delectus, totam expedita cupiditate natus. Itaque.
            </Content>
            <ContentImage imgUrl={"https://media.graphassets.com/QvKtGhSzSXe8a0851syB"} />
        </PageContainer>
    )
}