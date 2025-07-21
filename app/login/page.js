// pages/Login.js

import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>เข้าสู่ระบบ</title>
        {/* Bootstrap CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="container mt-5" style={{ paddingTop: '100px', paddingBottom: '100px'}}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow rounded-4">
              <div className="card-body">
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                <form>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
                    <input type="text" className="form-control" id="username" placeholder="กรอกชื่อผู้ใช้" />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                    <input type="password" className="form-control" id="password" placeholder="กรอกรหัสผ่าน" />
                  </div>

                  {/* Remember Me */}
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">จำฉันไว้</label>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">เข้าสู่ระบบ</button>
                  </div>

                  {/* Links */}
                  <div className="text-center">
                    <a href="/register" className="me-3">สมัครสมาชิก</a>
                    <a href="#">ลืมรหัสผ่าน</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
