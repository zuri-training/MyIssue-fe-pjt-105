import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { VscBell } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Header = ({ isAuth }) => {
        return (
            <div className={`header ${isAuth ? 'borderBottom' : 'header-padding'}`}>
                <div className={`headerContentWrapper ${isAuth ? 'inappWidth' : 'externalPageWidth'}`}>
                    <div className='headerLeft'>
                        <Link to='/'>
                            <div className='logo'>
                                <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='Logo'/>
                            </div>
                        </Link>
                    </div>
                    {
                        (isAuth) 
                        ?
                        (
                            <>
                                <div className='headerCenter'>
                                    <div className='searchBox'>
                                        <BsSearch className='searchIcon' size='0.9em'/>
                                        <input type='text' placeholder='Search posts, answers, communities...' />
                                    </div>
                                </div>
                                <div className='headerRight'>
                                    <div className='notification'>
                                        <VscBell className='notificationIcon' size='1.7em'/>
                                        <span>1</span>
                                    </div>
                                    <Link to='/profile'>
                                    <div className='profileImage'>
                                        <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' />
                                    </div>
                                    </Link>
                                </div>  
                            </>
                        )
                        :
                        (
                            <div className='nav-items'>
                                <ul>
                                    <li>Contact us</li>
                                    <li>Learn more</li>
                                    <li><Link to='/signin' id='loginBtn' className='headerBtn'>Login</Link></li>
                                    <li><Link to='/signup' id='signUpBtn' className='headerBtn'>Get Started</Link></li>
                                </ul>
                            </div>  
                        )
                    }
                    
                </div>
            </div>
        )
    }


//     const LandingPageHeader = () => {
//         return(
//             <>
//                 <div className='logo'>
//                     <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt='creer logo'/>
//                 </div>
//                 <div className='nav-items'>
//                     <ul>
//                         <li>Contact us</li>
//                         <li>Learn more</li>
//                         <li className='headerBtn loginBtn'><Link to='/signin' style={{textAlign: 'center', textDecoration: 'none', color:'#000'}}>Login</Link></li>
//                         <li className='headerBtn signUpBtn'><Link to='/signup' style={{textAlign: 'center', textDecoration: 'none', color:'#fff'}}>Get Started</Link></li>
//                     </ul>
//                 </div>
//             </>
//         )
//     }


//     return (
//         <div className='header'>
//             {(!isAuth) 
//             ? 
//              <LandingPageHeader />
//             : 
//              <HomePageHeader />
//             }
//         </div>
//     )
// }

export default Header;
