import React from 'react'
import './styles.css'
import UserImg from '../assets/userimg.jpg'
import gitIcon from '../assets/gitTop.png'
import BottomNav from '../components/bottomNav'
export default function index() {
    return (
        <>
          
            <div className='content-holder'>
                  {/* git top nav bar */}
                <nav>
                    <div className='main-navBar grid'>
                        <ul>
                            <li>icon</li>
                            <li><img src={gitIcon}/></li>
                            <li>icon</li>
                        </ul>
                    </div>
                </nav>
                {/* profiles here */}
                <div className=''>
                <section className='for-grid'>
                    <div className='user-profile-holder grid'>
                        <ul>
                            <li><div className='user-image-holder'>
                                <span><img src={UserImg}/></span></div></li>
                            <li >
                                <h3>Monika Ghimire</h3>
                                 <p>Monike-ghimire</p>
                            </li>
                        </ul>
                    </div>

                </section>
                <section>
                    <div className='profile-edit-btns-holder'>
                    <div className='edit-status-btn'><button >🦢<span className='edit-status-hide'> Edit status</span> </button></div>
                    <div className='edit-profile-btn'><button >Edit profile</button></div>
                    </div>
                    <div className='followes-holder'>
                        <ul>
                            <li>
                               <p>3k <span>followers</span></p> 
                            </li>
                            <li>
                                
                               <p>. 3<span> following</span></p> 
                            </li>
                        </ul>
                    </div>
                     
                     {/* scroll nav */}
                     <BottomNav/>
                </section>
                {/* pinned */}
                <section  >
                     <p className='pinned-heading'> pinned</p> 
                    <div className='pinned-list-Repositories grid'>
                           
                        <div className='pinned-list'>
                            <p>simple-images-uasb</p>
                        </div>
                        <div className='pinned-list'>
                            <p>simple-images-uasb</p>
                        </div>
                        <div className='pinned-list'>
                            <p>simple-images-uasb</p>
                        </div>
                    </div>
                </section>
                </div>
                
            </div>

        </>
    )
}
