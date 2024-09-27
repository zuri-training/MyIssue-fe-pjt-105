import SpaceCard from '../SpaceCard/SpaceCard'
import UserCard from '../UserCard/UserCard';
import './ProfileItemsList.css'

const ProfileItemsList = ({ contentType, content }) => {

  const renderBaseOnContentType = (type, contentData) => {
    switch(type) {
      case 'spaces':
        return (
          contentData.map(data => {
            return <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard key={data.id} space={data}/></li>
          })
        );
      case 'followers':
        return (
          contentData.map(data => {
            return <li className={(contentType === 'spaces') ? 'space-item' : ''}>follower</li>
          })
        );
      case 'questions':
        return (
          contentData.map(data => {
            return <li className={(contentType === 'spaces') ? 'space-item' : ''}>questions</li>
          })
        );
      case 'answers':
        return (
          contentData.map(data => {
            return <li className={(contentType === 'spaces') ? 'space-item' : ''}>answers</li>
          })
        );
      default:
        return null;
    }
  }

  return (
    <ul className='profile-items-list'>
        <li><UserCard /></li>
        {/* <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li>
        <li className={(contentType === 'spaces') ? 'space-item' : ''}><SpaceCard /></li> */}
    </ul>
  )
}

export default ProfileItemsList