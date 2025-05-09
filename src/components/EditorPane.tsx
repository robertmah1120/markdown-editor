import React from 'react';

interface EditorPaneProps {
    markdown: string;
    setMarkdown: (markdown: string) => void;
}

const EditorPane: React.FC<EditorPaneProps> = ({ markdown, setMarkdown }) => {
    return (
        <div className="editor-pane">
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Type your markdown here..."
                rows={20}
                cols={50}
            />
        </div>
    );
};

export default EditorPane;