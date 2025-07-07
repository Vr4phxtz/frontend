'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
  <img src="discord.svg" alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
  Frontend
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">หน้าแรก</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">เกี่ยวกับเรา</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/service">Action</a></li>
            <li><a className="dropdown-item" href="/service">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/service">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/contact">ติดต่อเรา</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="พิมพ์ข้อความเพื่อค้นหา" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>

  
 );
}