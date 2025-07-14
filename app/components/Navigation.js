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
        <Link
         href="/login"
          className="me-3 text-success text-decoration-none"
           style={{
            border: '2px solid green',
           borderRadius: '5px',
          padding: '6px 12px',
         }}
            >
             เข้าสู่ระบบ
        </Link>
      <form className="d-flex" role="search">
        <a className="navbar-brand" href="https://www.facebook.com/VR4PHxT">
      <img src="/image/navbar/facebook.svg" alt="" width={30} height={24} />
       </a>
       <a className="navbar-brand" href="https://www.instagram.com/vr4phxtz._/">
      <img src="/image/navbar/instagram.svg" alt="" width={30} height={24} />
       </a>
       <a className="navbar-brand" href="https://www.instagram.com/vr4phxtz._/">
      <img src="/image/navbar/tiktok.svg" alt="" width={30} height={24} />
       </a>

      </form>
    </div>
  </div>
</nav>

  
 );
}