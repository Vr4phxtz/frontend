'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {

  const router = useRouter();
  const [tokenState, setToken] = useState("");

  useEffect(() => {
  // อ่าน token จาก localStorage (ตอน mount)
  const token = localStorage.getItem("token");
  setToken(token);
}, []);

  const handleSignOut = () => {
  localStorage.removeItem("token");
  setToken(null);
  router.push("/login");
};


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="/discord.svg"
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
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                บริการของเรา
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#" className="dropdown-item">
                    Action
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
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

          <form className="d-flex" role="search">
            {tokenState ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="btn btn-outline-danger me-2"
              >
                <i className="bi bi-box-arrow-right"></i> ออกจากระบบ
              </button>
            ) : (
              <Link href="/login" className="btn btn-outline-primary me-2">
                <i className="bi bi-box-arrow-in-right"></i> SignIn
              </Link>
            )}

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
