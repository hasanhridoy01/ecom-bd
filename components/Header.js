import Link from "next/link";

function Header() {
  return (
    <div className="">
      <div className="navbar bg-base-100 p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li><a>Contect Us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl lg:ml-5 sm:mr-0 ella">new-ella</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><a className="home">Home</a></li>
            <li><a className="about">About Us</a></li>
            <li><a className="contect">Contect Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href=''><button className="btn btn-danger mr-5">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header