import './AboutCommunity.css'
import ContentWrapper from '../ContentWrapper/ContentWrapper'

const AboutCommunity = () => {
  return (
    <ContentWrapper>
        <header className='contentWrapper-header'>
            <p className='contentWrapper-title'>About</p>
        </header>
        <div className='contentWrapper-main'>
            <p>Google Question Hub is a Platform to gather a lot of Knowledge.<br></br><br></br>
            There are two main Goals here: <br></br><br></br>
            1. To spread interesting content: Any content that might be interesting for people to see is welcome in this space. It could be in any format: a link, a share of another Quora answer, or an answer to a question already in this space, but it shouldn’t be of excessively low quality.<br></br><br></br>
            2. Invite and Sharing: Make sure to invite your followers to this space, click on any ads you see, and otherwise simply be engaged in the space.
            </p>
        </div>
    </ContentWrapper>
  )
}

export default AboutCommunity