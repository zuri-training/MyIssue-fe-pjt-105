import { useState } from 'react';
import './ProfilePage.css';
import { FaTimes, FaGraduationCap } from 'react-icons/fa';
import { TbCake } from "react-icons/tb";
import { IoLocationOutline, IoAdd } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
// import { SlGraduation } from "react-icons/sl";
import Posts from '../../components/Posts/Posts';
import ProfileItemsList from '../../components/ProfileItemsList/ProfileItemsList';

const ProfilePage = () => {

    const [viewState, setViewState] = useState('posts');

    const checkViewState = (view) => {
        switch(view) {
            case 'posts':
                return <Posts />;
            case 'questions':
                return 'Questions goes here';
            case 'answers':
                return 'Answers Here!';
            case 'spaces':
                return <ProfileItemsList contentType='spaces' content={'hallo'}/>;
            case 'followers':
                    return 'Followers Here!';
            case 'following':
                    return 'Following Here!';
            default:
                return 'Ooops something broke!';
        }
    }

    return (
        <div className='profilePage'>
            {/* <div className='profilePageContainer'> */}

                {/* Profile Page Body */}
                <main className='profilePageContainer'>
                    <div className='profilePageBodyLeft'>
                        <div className='profilePageBodyTop'>
                            <div className='profileImageAndName'>
                                <img className='profilePageImage' src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt=''/>
                                <div className='profileNameAndShortDescription'>
                                    <p className='profilePageName'>Tolulope Daniels</p>
                                    <p className='profilePageShortDescription'>Frontend Developer at Zuri Team</p>
                                </div>
                            </div>
                            {/* <div className='profilePageDescription'>
                                <p className='profilePageDescriptionText'>My youtube channel: www.chandler.youtube.com</p>
                            </div> */}
                        </div>
                        <div className='profilePageBodyCenter'>
                        <div className='communityBodyLeftTop'>
                            <ul className='communityBodyLeftNavBar'>
                                <li id='aboutViewButton' className={`${(viewState === 'posts') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('posts')}>11 Posts</li>
                                <li id='questionsViewButton' className={`${(viewState === 'questions') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('questions')}>5 Questions</li>
                                <li id='postsViewButton' className={`${(viewState === 'answers') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('answers')}>23 Answers</li>
                                <li id='aboutViewButton' className={`${(viewState === 'spaces') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('spaces')}>10 Spaces</li>
                                <li id='postsViewButton' className={`${(viewState === 'followers') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('followers')}>566 Followers</li>
                                <li id='questionsViewButton' className={`${(viewState === 'following') ? 'selectStyle' : 'notSelectStyle'}`} onClick={() => setViewState('following')}>34 Following</li>
                            </ul>
                        </div>
                        <main className='communityBodyLeftMain profilePageBodyCenterMain'>
                            {
                                checkViewState(viewState)
                            }
                        </main>
                        </div>
                    </div>
                    <div className='profilePageBodyRight'>
                        <div className='profilePageCredentials'>
                            <div className='profilePageCredentialsHeader'>
                                <p className='profilePageCredentialsHeaderText'>Personal Details</p>
                                <BiPencil className='editIcon'/>
                            </div>
                            <div className='profilePageCredentialsBody'>
                                <div className='profilePageCredential'>
                                    <MdWorkOutline className='editIcon'/> 
                                    <p className='profilePageCredentialText'>Add Work Details</p>
                                </div>
                                <div className='profilePageCredential'>
                                    <FaGraduationCap className='editIcon'/> 
                                    <p className='profilePageCredentialText'>Add Education Details</p>
                                </div>
                                <div className='profilePageCredential'>
                                    <IoLocationOutline className='editIcon'/> 
                                    <p className='profilePageCredentialText'>Add Location Details</p>
                                </div>
                                <div className='profilePageCredential'>
                                    <TbCake className='editIcon'/> 
                                    <p className='profilePageCredentialText joinDate'>Joined June 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className='profilePageCreateACommunity'>
                            <div className='profilePageCreateACommunityHeader'>
                                <p className='profilePageCreateACommunityHeaderText'>Communities</p>
                            </div>
                            <div className='profilePageCreateACommunityBody'>
                                <div className='createACommunityButton'>
                                    <IoAdd className='createACommunityIcon' />
                                    <p className='createACommunityText'>Create A Community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
            </div>
        // </div>
        
    )
}

export default ProfilePage;
