import Image from 'next/image'
import Hero from './components/Hero'
import Section from './components/FirstSection'
import SecondSection from './components/SecondSection'
import Contact from './components/Contact'
import EventPage from './components/Events'
import TeamSection from './components/Team'
import RetreatRooms from './components/Retreat'
import ConferenceRooms from './components/Conference'

// import Hero2 from './components/Hero2'


export default function Home() {
  return (
   <>
<Hero/>
<SecondSection/>
<Section/>
<RetreatRooms/>
<EventPage/>
<ConferenceRooms/>
<TeamSection/>
<Contact/>

   </>
  )
}
