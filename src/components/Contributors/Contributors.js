import './Contributors.css'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { GiGriffinShield, GiLightningShield, GiMagicShield } from "react-icons/gi";

const Contributors = ({ isAboutMain, contributorType}) => {


    const checkType = (type) => {
        switch(type) {
            case 'admin':
                return 'Admins';
            case 'moderators':
                return 'Moderators';
            default:
                return '102 Contributors'
        }
    }

  return (
    <ContentWrapper type={'list'}>
        <header className='contentWrapper-header'>
            <p className='contentWrapper-title contentWrapper-header-text'>{checkType(contributorType)}</p>
            {/* <p className='contentWrapper-header-text'>view all</p> */}
        </header>
        <ul className='contentWrapper-list'>
            <li className='contentWrapper-list-item'>
                <img alt="contributor-profile" src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className={(isAboutMain) ? 'contributor-profile-image-lg' : 'contributor-profile-image-sm'}/>
                <div className='contributor-text-container'>
                    <p className='contributor-text'><span className='contributor-name'>Andre Bioski</span> <GiMagicShield className='contributor-icon'/>, Owner of a business</p>
                    {
                        (isAboutMain) ?
                        (
                            <p className='contributor-text'>45k views</p>
                        ) :
                        ''
                    }
                </div>
            </li>
            <li className='contentWrapper-list-item'>
                <img alt="contributor-profile" src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className={(isAboutMain) ? 'contributor-profile-image-lg' : 'contributor-profile-image-sm'}/>
                <div className='contributor-text-container'>
                    <p className='contributor-text'><span className='contributor-name'>Tolulope Daniel</span> <GiLightningShield className='contributor-icon'/>, Software Developer</p>
                    {
                        (isAboutMain) ?
                        (
                            <p className='contributor-text'>5k views</p>
                        ) :
                        ''
                    }
                </div>
            </li>
            <li className='contentWrapper-list-item'>
                <img alt="contributor-profile" src={process.env.PUBLIC_URL + '/assets/communityImage4.png'} className={(isAboutMain) ? 'contributor-profile-image-lg' : 'contributor-profile-image-sm'}/>
                <div className='contributor-text-container'>
                    <p className='contributor-text'><span className='contributor-name'>Mark Vanns</span> <GiLightningShield className='contributor-icon'/>, Product Manager</p>
                    {
                        (isAboutMain) ?
                        (
                            <p className='contributor-text'>4k views</p>
                        ) :
                        ''
                    }
                </div>
            </li>
            {/* <li className='contentWrapper-list-item'>What should i do to get my first job in tech?</li>
            <li className='contentWrapper-list-item'>What's the most common error in learning to code?</li>
            <li className='contentWrapper-list-item'>What's the React library for?</li>
            <li className='contentWrapper-list-item'>What's the best job in tech?</li> */}
        </ul>
        {
            (contributorType === 'admin' || contributorType === 'moderators') ?
            '' :
            (
                <footer className='contentWrapper-footer'>View all</footer>
            )
        }
    </ContentWrapper>
)
}

export default Contributors