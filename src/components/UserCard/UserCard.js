import './UserCard.css'

const UserCard = () => {
  return (
    <div className='user-card'>
        <div className='user-card-image-wrapper'>
            <img className='user-card-image' src={process.env.PUBLIC_URL + '/assets/userProfileImage1.png'} alt=''/> 
        </div>
        <div className='user-card-descriptions'>
            <p className='user-name-tag'><span className='user-name'>Andre Bioski</span>,<span className='user-tag'>Owner of a business</span></p>
            <p className='user-followers'>1.2K followers</p>
        </div>
    </div>
  )
}

export default UserCard