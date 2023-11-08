import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeArea(props) {
    return (
        <section className="p-4 bg-[#F7F6F3] rounded-md mb-4">
            <div className="flex mb-4 gap-1.5 border-b pb-2">
                <div className="w-3 rounded-full bg-red-400 h-3"></div>
                <div className="w-3 rounded-full bg-yellow-400 h-3"></div>
                <div className="w-3 rounded-full bg-green-400 h-3"></div>
            </div>
            <SyntaxHighlighter language="javascript" style={docco} >
                {props.code}
            </SyntaxHighlighter>
        </section>
    )
} 