import Ugurlarimiz from './Ugurlarimiz'
import Ugurlar from './Ugurlar'
import MeqaleHeader from './MeqaleHeader'
import Xidmetler from './Xidmetler'
import Kim from './Kim'
import Hekim from './Hekim'
import MeqaleCarousel from './MeqaleCarousel'

function Mainb() {
  return (
    <>
      <Hekim />
      <Kim />
      <Xidmetler />
      <MeqaleHeader />
      <MeqaleCarousel />
      <Ugurlarimiz />
      <Ugurlar />
    </>
  )
}

export default Mainb