import nigar from "../../public/images/nigar.png"
import nameLogo from "../../public/images/name-logo.svg"
import "../Css/hekim-d.css"
function DesktopHekim() {
  return (
<div className="desktop-d">
    <div className="bckgrnd-d">
        <img src={nigar} className="nigar-d" alt="Nigar-Hekim" />
    </div>
    <div className="back-d2">
        <img src={nameLogo} className="nameLogo-d" alt="name-logo" />
        <p className="bck-p1-d">Sağlamlığınız üçün burdayam</p>
        <p className="bck-p2-d">20+ illik təcrübə sizin xidmətinizdə</p>
        <button className="btn-back-d">Randevu al</button>
    </div>
</div>    
  )
}

export default DesktopHekim