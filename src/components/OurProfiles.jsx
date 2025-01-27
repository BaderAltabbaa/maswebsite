import ProfileImageSlider from "./ProfileImageSlider"
import './styles/ourprofile.css'
import { useTranslation } from 'react-i18next';

const OurProfiles = () => {

  const { t } = useTranslation(); 

  const images= [
    {src: '/profile/1.png'},
    {src: '/profile/2.png'},
    {src: '/profile/3.png'},
    {src: '/profile/4.png'},
    {src: '/profile/5.png'},
    {src: '/profile/6.png'},
    {src: '/profile/7.png'},
    {src: '/profile/8.png'},
    {src: '/profile/9.png'},
    {src: '/profile/10.png'},
    {src: '/profile/11.png'},
    {src: '/profile/12.png'},
    {src: '/profile/13.png'},
    {src: '/profile/14.png'},
    {src: '/profile/15.png'},
    {src: '/profile/16.png'},
    {src: '/profile/17.png'},
    {src: '/profile/18.png'},
    {src: '/profile/19.png'}

  ]
 
    return<>
    
    <div className="sub-header-content" style={{marginBottom:0}}>
        <div className="sub-header-text">
          <span className='sub-header-text-1'>{t('profile.title')}</span>
        </div>
      </div>

      <div className="profile-image-slider">
      <ProfileImageSlider images={images} autoPlayInterval={5000} />;
    </div>

     
    
    </>
  }
  
  export default OurProfiles