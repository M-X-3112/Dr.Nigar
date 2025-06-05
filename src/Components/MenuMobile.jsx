import "../Css/hmobile.css"
import scrolltoID from "../utils/scrolltoID";
function MenuMobile({open, setOpen}) {
  const handleScroll2 = (e,id) => {
    e.preventDefault();
    scrolltoID(id);
    setOpen(!open)
  }
  
  return (
    <ul className={`menu-mobil ${open ? "visible1" : ""}`}>
        <li onClick={(e)=> handleScroll2(e,"kart1")}><a href="#">Haqqımda</a></li>
        <li onClick={(e)=> handleScroll2(e,"xidmet1")}><a href="#">Xidmətlər</a></li>
        <li onClick={(e)=> handleScroll2(e,"meq1")}><a href="#">Məqalələr</a></li>
        <li onClick={(e)=> handleScroll2(e,"elaqe1")}><a href="#">Əlaqə</a></li>
    </ul>
  )
}

export default MenuMobile