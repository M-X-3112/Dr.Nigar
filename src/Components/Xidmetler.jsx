import "../Css/xidmetler.css"
import check from "../../public/images/check.svg"

function Xidmetler() {
  return (
    <div className='xidmetler' id='xidmet1'>
        <div className="x-line"></div>
        <h1>Xidmətlər</h1>

        <div className="novler">
            <div className="xidmet1">
                <div className="altx">
                    <img src={check} />
                    <p>Ümumi terapevtik konsultasiya</p>
                </div>
                <div className="altx2">
                    <p>Sağlamlıq vəziyyətinin ümumi qiymətləndirilməsi</p>
                </div>
            </div>
            <div className="xidmet1">
                <div className="altx">
                    <img src={check} />
                    <p>Profilaktik müayinələr</p>
                </div>
                <div className="altx2">
                    <p>Xəstəliklərin erkən aşkarlanması üçün</p>
                </div>
            </div>
            <div className="xidmet1">
                <div className="altx">
                    <img src={check} />
                    <p>Evdə tibbi xidmət</p>
                </div>
                <div className="altx2">
                    <p>Yerində konsultasiya və baxış (əgər varsa)</p>
                </div>
            </div>
            <div className="xidmet1">
                <div className="altx">
                    <img src={check} />
                    <p>Laborator analizlər</p>
                </div>
                <div className="altx2">
                    <p>Qan, sidik və digər testlərin təşkili</p>
                </div>
            </div>
            <div className="xidmet1">
                <div className="altx">
                    <img src={check} />
                    <p>Müalicə planlaması</p>
                </div>
                <div className="altx2">
                    <p>Diaqnoz əsasında fərdi müalicə</p>
                </div>
            </div>
            <div className="xidmet1">
                <div className="altx">
                    <img src={check} />
                    <p>Psixoloji dəstək</p>
                </div>
                <div className="altx2">
                    <p>Fərdin psixoloji vəziyyəti</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Xidmetler