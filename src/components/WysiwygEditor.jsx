import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const WysiwygEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
      <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} />
    </div>
  );
};

export default WysiwygEditor;