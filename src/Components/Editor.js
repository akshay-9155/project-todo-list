import React from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor';
const Editor = (props) => {

    return (
        <div>
            <MarkdownEditor
                height='400px'
                value={props.mdStr}
                onChange={(value, viewUpdate) => {
                    props.setMdStr(value)
                    console.log(value)
                }}
            />
        </div>
    )
}

export default Editor