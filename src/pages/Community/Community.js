import { useState } from 'react';
import './Community.css';
import Header from '../../components/Header/Header';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import CommunitiesToFollow from '../../components/CommunitiesToFollow/CommunitiesToFollow';
import AboutCommunity from '../../components/AboutCommunity/AboutCommunity';
import Contributors from '../../components/Contributors/Contributors';

const CommunityPage = () => {

    const [viewState, setViewState] = useState('posts');

    const checkViewState = (view) => {
        switch(view) {
            case 'about':
                return (
                    <>
                        <AboutCommunity />
                        <Contributors isAboutMain contributorType={'admin'}/>
                        <Contributors isAboutMain contributorType={'moderators'}/>
                        <Contributors isAboutMain />
                    </>
                );
            case 'posts':
                return <Feed />;
            case 'questions':
                return 'Questions goes here';
            default:
                return 'Loading';
        }
    }


    return (
        <div className='communityPage'>
            {/* Header */}
            {/* <Header /> */}

            {/* Cpmmunity Header */}
            <div className='communityHeader'>
                <img className='communityHeaderBackgroundImage' src={process.env.PUBLIC_URL + '/assets/communityBackgroundImage1.jpg'} alt=''/>
                {/* <div className='communityHeaderGradientLayer'></div>  */}
                <div className='communityHeaderBiggerImageHolder'>
                    <img className='communityHeaderBiggerImage' src={process.env.PUBLIC_URL + '/assets/communityBackgroundImage1.jpg'} alt=''/> 
                </div>
                <div className='communityHeaderSmallerImageHolder'>
                    <img className='communityHeaderSmallerImage' src={process.env.PUBLIC_URL + '/assets/communitySmallerImage.png'} alt=''/> 
                </div>
                <div className='communityHeaderDetails'>
                    <div className='commmunityHeaderDetailsLeft'>
                        <p className='communityHeaderDetailsNameText'>Beginner coder</p>
                        <p className='communityHeaderDetailsDescriptionText'>trying to learn programing and coding as a  beginner</p>
                        <p className='communityHeaderDetailsFollowersText'>2K followers</p>
                    </div>
                    <div className='commmunityHeaderDetailRight'>
                        <button className='commmunityHeaderFollowBtn'>Follow</button>
                        <button className='commmunityHeaderInviteBtn'>Invite</button>
                    </div>
                </div>
            </div>

            {/* Community Body */}
            <main className='communityBody'>
                <div className='communityBodyLeft'>
                    <div className='communityBodyLeftTop'>
                        <ul className='communityBodyLeftNavBar'>
                            <li id='aboutViewButton' className={`${(viewState === 'about') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('about')}>About</li>
                            <li id='postsViewButton' className={`${(viewState === 'posts') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('posts')}>Posts</li>
                            <li id='questionsViewButton' className={`${(viewState === 'questions') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('questions')}>Questions</li>
                        </ul>
                    </div>
                    <main className='communityBodyLeftMain'>
                        {
                            checkViewState(viewState)
                        }
                    </main>
                </div>
                <div className='communityBodyRight'>
                    {
                        (viewState === 'about') ?
                        '' :
                        (
                           <>
                            <Contributors />
                            <AboutCommunity />
                            <CommunitiesToFollow />
                           </> 
                        )
                    }
                </div>
            </main>
            
        </div>
    )
}

export default CommunityPage;