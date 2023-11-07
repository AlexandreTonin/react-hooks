import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'

export default function BackToGalleryButton() {
    return (
        <Link to="/" className="text-blue-400 flex gap-2 items-center w-fit pb-4 text-sm">
            <BiArrowBack />
            Voltar para o início
        </Link>
    )
}