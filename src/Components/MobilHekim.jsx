import "../Css/hekim.css"
import nigar from "../../public/images/nigar.png"
import nameLogo from "../../public/images/name-logo.svg"
function MobilHekim() {
  return (
    <div className="mobil-h">
        <div className="bckgrnd-m">
            <img src={nigar} className="nigar-p" alt="Nigar-Hekim" />
        </div>
        <div className="back2">
            <img src={nameLogo} className="nameLogo" alt="name-logo" />
            <p className="bck-p1">Sağlamlığınız üçün burdayam</p>
            <p className="bck-p2">20+ illik təcrübə sizin xidmətinizdə</p>
            <button className="btn-back">Randevu al</button>
        </div>
    </div>
  )
}

export default MobilHekim