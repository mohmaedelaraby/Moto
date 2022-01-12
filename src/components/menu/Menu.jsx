import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Motorcycle</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Rides</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Our Clients</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
