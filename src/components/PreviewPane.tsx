import React from 'react';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { marked } from 'marked';

interface PreviewPaneProps {
    markdown: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ markdown }) => {
    const [htmlContent, setHtmlContent] = useState<string>('');

    useEffect(() => {
        const parseMarkdown = async () => {
            const result = await marked(markdown);
            setHtmlContent(result);
        };
        parseMarkdown();
    }, [markdown]);

    const handleExport = () => {
        const blob = new Blob([htmlContent], { type: 'application/pdf' });
        saveAs(blob, 'document.pdf');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(htmlContent).then(() => {
            alert('Copied to clipboard!');
        });
    };

    return (
        <div className="preview-pane">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            <div className="toolbar">
                <button onClick={handleExport}>Export</button>
                <button onClick={handleCopy}>Copy</button>
            </div>
        </div>
    );
};

export default PreviewPane;