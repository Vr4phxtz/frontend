// pages/Login.js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Swal from 'sweetalert2';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false); // สำหรับ animation
  const router = useRouter();

  useEffect(() => {
    setAnimate(true); // เริ่ม animation หลัง mount
  }, []);

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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div
        className="min-vh-100 d-flex justify-content-center align-items-center"
        style={{
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          padding: '50px 20px',
        }}
      >
        <div
          className={`card shadow-lg rounded-4 p-4 p-md-5 ${animate ? 'animate-card' : ''}`}
          style={{
            maxWidth: '450px',
            width: '100%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255,255,255,0.85)',
          }}
        >
          <h3 className="text-center mb-4 fw-bold text-primary">เข้าสู่ระบบ</h3>
          <form onSubmit={handleLogin}>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                ชื่อผู้ใช้
              </label>
              <input
                type="text"
                className="form-control border-2 border-primary shadow-sm"
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
              <label htmlFor="password" className="form-label fw-semibold">
                รหัสผ่าน
              </label>
              <input
                type="password"
                className="form-control border-2 border-primary shadow-sm"
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
              <button type="submit" className="btn btn-primary fw-bold py-2" disabled={loading}>
                {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
              </button>
            </div>

            {/* Links */}
            <div className="text-center">
              <a href="/register" className="me-3 text-decoration-none text-primary fw-semibold hover-opacity">
                สมัครสมาชิก
              </a>
              <a href="#" className="text-decoration-none text-primary fw-semibold hover-opacity">
                ลืมรหัสผ่าน
              </a>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .form-control:focus {
          border-color: #2575fc;
          box-shadow: 0 0 0 0.25rem rgba(37, 117, 252, 0.25);
        }

        .hover-opacity:hover {
          opacity: 0.8;
          transition: 0.3s;
        }

        /* Animation */
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-card {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
