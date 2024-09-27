import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import './TextEditor.css';

const initialValue = '';

const TextEditor = () => {

  const [value, onChange] = useState(initialValue);
  const [preview, setPreview] = useState(false);

  console.log(value)

  return (
    <div style={{width: '100%', height: 'fit-content', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {
          (!preview) ? 
          <div>
            <RichTextEditor 
              value={value} 
              onChange={onChange}
              placeholder="Say Something..."
              controls={[
                ['h4', 'bold', 'italic', 'clean'],
                ['unorderedList', 'orderedList'],
                ['link', 'image'],
                ['alignLeft', 'alignCenter', 'alignRight'],
                ['blockquote', 'codeBlock']
              ]} />
          </div>
          :
          <div style={{width: '100%'}}>
            <RichTextEditor value={value} readOnly />
          </div>
        }
        
        <div className='makeAPostFooter'>
            {
              (value === '<p><br></p>') ?
              ''
              :
              <input onClick={() => setPreview(!preview)} type='submit' className='makeAPostFooterBtn previewBtn' value={!preview ? 'Preview Post' : 'Continue Editting'}/>
            }
            <input className='makeAPostFooterBtn publishBtn' type='submit' value='Publish Post'/>
        </div>
    </div>
  )
}

export default TextEditor;