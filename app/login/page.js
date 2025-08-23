// pages/Login.js

'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Swal from 'sweetalert2';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);

        await Swal.fire({
          icon: 'success',
          title: '<h3>เข้าสู่ระบบสำเร็จ!</h3>',
          showConfirmButton: false,
          timer: 2000,
        });

        router.push('/admin/users');
      } else {
        await Swal.fire({
          icon: 'warning',
          title: '<h3>เข้าสู่ระบบล้มเหลว!</h3>',
          text: data.message || 'กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่าน',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      await Swal.fire({
        icon: 'error',
        title: '<h3>เกิดข้อผิดพลาด!</h3>',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ โปรดลองใหม่ภายหลัง',
        showConfirmButton: true,
      });
    }

    setLoading(false);
  };

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

      <div className="container mt-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow rounded-4">
              <div className="card-body">
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                <form onSubmit={handleLogin}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      ชื่อผู้ใช้
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="กรอกชื่อผู้ใช้"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={loading}
                      autoComplete="username"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      รหัสผ่าน
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="กรอกรหัสผ่าน"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                      autoComplete="current-password"
                    />
                  </div>

                  {/* Remember Me */}
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      disabled={loading}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      จำฉันไว้
                    </label>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                    </button>
                  </div>

                  {/* Links */}
                  <div className="text-center">
                    <a href="/register" className="me-3">
                      สมัครสมาชิก
                    </a>
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