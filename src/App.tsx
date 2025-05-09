import React, { useState } from 'react';
import EditorPane from './components/EditorPane';
import PreviewPane from './components/PreviewPane';
import './styles/App.css';

const App = () => {
    const [markdown, setMarkdown] = useState('');

    const handleMarkdownChange = (newMarkdown) => {
        setMarkdown(newMarkdown);
    };

    return (
        <div className="app-container">
            <EditorPane markdown={markdown} onMarkdownChange={handleMarkdownChange} />
            <PreviewPane markdown={markdown} />
        </div>
    );
};

export default App;