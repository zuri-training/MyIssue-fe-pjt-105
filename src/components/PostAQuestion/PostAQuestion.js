import { useState } from 'react';
import TextEditor from '../TextEditor/TextEditor';
import './PostAQuestion.css';

const PostAQuestion = () => {

    const [viewState, setViewState] = useState('question');

    console.log(viewState);


    const openPostAQuestionBody = () => {
        const body = document.getElementById('postAQuestionBody');
        body.classList.toggle('noDisplay');
    }


    return (
        <div className='postAQuestion'>
            <div className='postAQuestionHeader'>
                <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' className='profileImage' />
                <div className='postAQuestionBtn' onClick={openPostAQuestionBody}>
                    <p>What's on your mind??</p>
                </div>
            </div>
            <div className='postAQuestionBody noDisplay' id='postAQuestionBody'>
                <div className='postAQuestionBodyTop'>
                    <ul className='postAQuestionNavBar'>
                        <li id='AskAQuestionViewButton' className={`${(viewState === 'question') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('question')}>Ask A Question</li>
                        <li id='makeAPostViewButton' className={`${(viewState === 'post') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('post')}>Make A Post</li>
                    </ul>
                </div>
                <div className={`postAQuestionBodyCenter ${(viewState === 'question') ? 'viewStateStyling' : ''}`}>
                    {
                        (viewState === 'question') ?
                        <>
                            <div className='postAQuestionInputWrapper'>
                                <textarea name='question'  id='question' placeholder='Ask Your Question...'></textarea>
                            </div>
                            <div className='postAQuestionBodyBottom'>
                                <input className='posAQuestionBtn' type='submit' value='Post Question'/>
                            </div>
                        </>
                        :
                        <TextEditor />
                    }
                </div>
            </div>
        </div>
    )
}

export default PostAQuestion;
