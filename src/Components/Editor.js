import React from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor';
const Editor = (props) => {
    const {currentNote, updateNote} = props;
    console.log(currentNote().body);
    return (
        <div className='editor'>
            <MarkdownEditor
                className='mkd-editor'
                value={currentNote().body}
                onChange={updateNote}
                />
        </div>
    )
}

export default Editor