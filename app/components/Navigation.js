'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <img
            src="discord.svg"
            alt="Logo"
            width={30}
            height={24}
            className="d-inline-block align-text-top"
          />
          Frontend
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                href="/service"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                บริการของเรา
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/service" className="dropdown-item">
                    Action
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="dropdown-item">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/service" className="dropdown-item">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                ติดต่อเรา
              </Link>
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
            <a
              href="https://www.facebook.com/VR4PHxT"
              className="navbar-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/navbar/facebook.svg" alt="Facebook" width={30} height={24} />
            </a>
            <a
              href="https://www.instagram.com/vr4phxtz._/"
              className="navbar-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/navbar/instagram.svg" alt="Instagram" width={30} height={24} />
            </a>
            <a
              href="https://www.tiktok.com/@vr4phxtz._"
              className="navbar-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/navbar/tiktok.svg" alt="Tiktok" width={30} height={24} />
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}
