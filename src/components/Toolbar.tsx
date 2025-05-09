import React from 'react';

const Toolbar: React.FC<{ onExport: () => void; onCopy: () => void; }> = ({ onExport, onCopy }) => {
    return (
        <div className="toolbar">
            <button onClick={onExport}>Export</button>
            <button onClick={onCopy}>Copy</button>
        </div>
    );
};

export default Toolbar;