import './SpaceCard.css'

const SpaceCard = () => {
  return (
    <div className='space-card'>
        <div className='space-image-wrapper'>
            <img className='space-image' src={process.env.PUBLIC_URL + '/assets/communitySmallerImage.png'} alt=''/> 
        </div>
        <div className='space-discriptions'>
            <p className='space-name'>Google Question Hub</p>
            <p className='space-followers'>151.2K followers</p>
            <p className='space-short-description'>Google Question Hub is a Platform to gather lot of knowledge.</p>
        </div>
    </div>
  )
}

export default SpaceCard