import React from 'react'
import './MainPage.css'
import homepageimage from '../../images/homepageimage.png'
import paris from '../../images/paris.png'
import amsterdam from '../../images/amsterdam.png'
import denmark from '../../images/denmark.png'
import joshua from '../../images/joshua.png'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as spotsAction from '../../store/spot'


export default function MainPage() {
    let user = useSelector((state) => state.session.user)
    let userId = user?.id

    let history = useHistory();
    const dispatch = useDispatch();

    const allprops = (e) => {
        e.preventDefault()
        let path = '/spots'
        history.push(path)
    }

    const hostprops = (e) => {
        e.preventDefault()
        let path = '/host-property'
        history.push(path)
    }

    const viewprops = (e) => {
        e.preventDefault();
        let path = `/users/${userId}/spots`
        history.push(path)
    }

    return (
        <div className='homePageMainBox'>
            <div className='homePageBlackBox'>
                <div className='homePagePropertBtns'>
                    <button className='propBtn' onClick={hostprops}>
                        <h2 className='h2propBtn'>Host your property</h2>
                        </button>
                    <button className='propBtn' onClick={viewprops}>
                        <h2 className='h2propBtn'>View your properties</h2>
                    </button>
                </div>
                <div className='homePageImageBox'>
                    <img className='homePageImage' src={homepageimage}/>
                        <div className='homePageTextBox'>
                            <h2 className='homePageText'>Not sure where to go? Explore.</h2>
                        <div className='homePageImageBtnBox'>
                            <button className='homePageImageBtn' onClick={allprops}>
                                <h2 className='exploreText'>Explore all places</h2>
                            </button>
                        </div>
                        </div>
                </div>
            </div>
            <div className='homePageCardBox'>
                <div className='cardTextBox'>
                    <h2 className='cardText'>Inspiration for your next trip</h2>
                </div>
                <div className='homePageCardsOuterBox'>
                    <a className='homePageCards' href='/spots/spotsbycity/Paris'>
                        <img className='homePageIndivCard' src={paris}/>
                        <div className='cardImageTextBoxOne'>
                            <h2 className='cardImageText'>Paris</h2>
                        </div>
                    </a>
                    <a className='homePageCards' href='/spots/spotsbycity/Joshua Tree'>
                        <img className='homePageIndivCard' src={joshua}/>
                        <div className='cardImageTextBoxTwo'>
                            <h2 className='cardImageText'>Joshua Tree</h2>
                        </div>
                    </a>
                    <a className='homePageCards' href='/spots/spotsbycity/Copenhagen'>
                        <img className='homePageIndivCard' src={denmark}/>
                        <div className='cardImageTextBoxThree'>
                            <h2 className='cardImageText'>Copenhagen</h2>
                        </div>
                    </a>
                    <a className='homePageCards' href='/spots/spotsbycity/Amsterdam'>
                        <img className='homePageIndivCard' src={amsterdam}/>
                        <div className='cardImageTextBoxFour'>
                            <h2 className='cardImageText'>Amsterdam</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
