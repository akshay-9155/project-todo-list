import logo from './logo.svg';
import './App.css';
import React from 'react';
import Editor from './Components/Editor';
function App() {
  const [mdStr, setMdStr] = React.useState(`# Welcome to markdown`);
  return (
    <div className="App">
      <Editor mdStr = {mdStr} setMdStr={setMdStr}/>
    </div>
  );
}
export default App;


// https://www.npmjs.com/package/@uiw/react-markdown-editor
// https://www.npmjs.com/package/react-split?activeTab=readme