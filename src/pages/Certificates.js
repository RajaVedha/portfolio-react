import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { School } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Certificates() {
  return (
    <div className='certificates'>
      <Navbar />
      <VerticalTimeline lineColor='#3e497a'>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Aug 2022' 
          iconStyle={{background: '#3e497a', color: '#fff'}} 
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>Basics Of Python</h3>
          <p>Infosys Springboard</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Sept 2022' 
          iconStyle={{background: '#e9d35b', color: '#fff'}} 
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>Git & Git-Hub-self paced</h3>
          <p>GeeksforGeeks</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Mar 2023' 
          iconStyle={{background: '#3e497a', color: '#fff'}} 
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>CCNA: Introduction To Networks</h3>
          <p>Cisco Networking Academy</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Mar 2023' 
          iconStyle={{background: '#e9d35b', color: '#fff'}} 
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>Web Development Complete Bootcamp</h3>
          <p>Udemy</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Aug 2023' 
          iconStyle={{background: '#3e497a', color: '#fff'}} 
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>Introduction To MongoDb</h3>
          <p>MongoDb University</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Jul 2023' 
          iconStyle={{background: '#e9d35b', color: '#fff'}} 
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>CyberSecurity Essentials</h3>
          <p>Cisco Networking Academy</p>
          </VerticalTimelineElement>
          
      </VerticalTimeline>
      <Footer />
    </div>
  )
}

export default Certificates
