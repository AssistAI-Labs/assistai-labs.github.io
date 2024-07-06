import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import './style.css'

const OurTeam = () => {
  return (
    <div className='team-section'>
      <div className='team-heading'>
        Meet our team
      </div>
      <div className='team-container'>
        <ProfileCard picture={profile2} name={'Harshit Aggarwal'} link1={'https://www.linkedin.com/in/harshit0414/'} link2 = {'https://github.com/harshit433'}/>
        <ProfileCard picture={profile3} name={'Kunal Baghel'} link1={'https://www.linkedin.com/in/kunal-baghel-6349b8242/'} link2 = {'https://github.com/Kunalverse'}/>
        <ProfileCard picture={profile1} name={'Gaurika Gupta'} link1={'https://www.linkedin.com/in/gaurika-gupta-/'} link2 = {'https://github.com/gaurika05'}/>
      </div>
    </div>
  )
}

export default OurTeam