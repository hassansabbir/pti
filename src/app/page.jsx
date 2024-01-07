
import Banner from './Components/Banner/Banner'
import Popular from './Components/Popular/Popular'
import Recommended from './Components/Recommended/Recommended'


export default function Home() {
  return (
    <main className='lg:mt-20 lg:ms-20 lg:me-20' >
     
         <Banner/>  
         <Popular/>
         <Recommended/>
    </main>
  )
}
