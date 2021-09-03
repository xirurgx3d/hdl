import { default as React, useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
 
const DEFAULT_INITIAL_DATA = () => {
  return {
    
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "",
          "level": 1
        }
      },
    ]
  }
}
export type TeditorData = ReturnType<typeof DEFAULT_INITIAL_DATA>
 
const EDITTOR_HOLDER_ID = 'editorjs';
 
type IEditor = {
  setEditorData:any,
  editorData:TeditorData | null
}

const Editor: React.FC<IEditor> = ({editorData = {},setEditorData}): JSX.Element =>  {
  const ejInstance = useRef<any>();
 
 
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);

  
 
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR" as any,
      data: editorData as TeditorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: (data) => {
        data.saver.save().then((blocks) => {
          setEditorData(blocks)
        })
        
      },
      autofocus: true,
      tools: { 
        header: Header, 
      }, 
    });
  };
 
  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}> </div>
    </React.Fragment>
  );
}
 
export default Editor;