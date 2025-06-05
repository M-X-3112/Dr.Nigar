import m1 from "../../public/images/m1.jpg"
import "../Css/m1.css"

function Meqale1() {
  return (
    <div className='meqale1'>
        <img src={m1} alt="meqale1-photo" />
        <div className="meqale-text1">
            <h3>Gündə neçə litr su içməliyik və niyə?</h3>
            <p className='yazi'>Su, bədənimizin funksiyalarını yerinə yetirməsi üçün həyati əhəmiyyət daşıyır. 
            Amma çoxumuz gündəlik tələbatı qarşılaya bilmirik. Bu yazıda suyun rolu və nə qədər
            içməli olduğunuz izah olunur.</p>
            <p className='muellif'>Nigar Məmmədova</p>
        </div>
    </div>
  )
}

export default Meqale1