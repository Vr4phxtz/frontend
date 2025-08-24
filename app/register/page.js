'use client'

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Register() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');
  const [agree, setAgree] = useState(false);

  // สำหรับ animation
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      return Swal.fire({
        icon: 'warning',
        title: 'กรุณายอมรับเงื่อนไข',
      });
    }

    const fullname = `${firstname} ${lastname}`;

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          firstname,
          lastname,
          fullname,
          username,
          password,
          address,
          sex,
          birthday,
        }),
      });

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => router.push('/login'));

        // Reset form
        setTitle('');
        setFirstname('');
        setLastname('');
        setUsername('');
        setPassword('');
        setAddress('');
        setSex('');
        setBirthday('');
        setAgree(false);
      } else {
        Swal.fire({
          title: 'Error!',
          text: result.message || 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  return (
    <>
      <Head>
        <title>สมัครสมาชิก</title>
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
            maxWidth: '600px',
            width: '100%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255,255,255,0.85)',
          }}
        >
          <h3 className="text-center mb-4 fw-bold text-primary">สมัครสมาชิก</h3>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label fw-semibold">ชื่อผู้ใช้</label>
              <input
                type="text"
                className="form-control border-2 border-primary shadow-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">รหัสผ่าน</label>
              <input
                type="password"
                className="form-control border-2 border-primary shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* คำนำหน้า */}
            <div className="mb-3">
              <label className="form-label fw-semibold">คำนำหน้าชื่อ</label>
              <select
                className="form-select border-2 border-primary shadow-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option value="">เลือก...</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>

            {/* ชื่อ และ นามสกุล */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">ชื่อ</label>
                <input
                  type="text"
                  className="form-control border-2 border-primary shadow-sm"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">นามสกุล</label>
                <input
                  type="text"
                  className="form-control border-2 border-primary shadow-sm"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ที่อยู่ */}
            <div className="mb-3">
              <label className="form-label fw-semibold">ที่อยู่</label>
              <textarea
                className="form-control border-2 border-primary shadow-sm"
                style={{ height: 100 }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* เพศ */}
            <div className="mb-3">
              <label className="form-label fw-semibold">เพศ</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  value="ชาย"
                  checked={sex === 'ชาย'}
                  onChange={(e) => setSex(e.target.value)}
                />
                <label className="form-check-label">ชาย</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  value="หญิง"
                  checked={sex === 'หญิง'}
                  onChange={(e) => setSex(e.target.value)}
                />
                <label className="form-check-label">หญิง</label>
              </div>
            </div>

            {/* วันเกิด */}
            <div className="mb-3">
              <label className="form-label fw-semibold">วันเกิด</label>
              <input
                type="date"
                className="form-control border-2 border-primary shadow-sm"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>

            {/* ยอมรับเงื่อนไข */}
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label className="form-check-label fw-semibold">
                ยอมรับเงื่อนไขและข้อตกลง
              </label>
            </div>

            {/* Submit */}
            <div className="d-grid mb-3">
              <button
                type="submit"
                className="btn btn-primary fw-bold py-2"
              >
                สมัครสมาชิก
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .form-control:focus, .form-select:focus {
          border-color: #2575fc;
          box-shadow: 0 0 0 0.25rem rgba(37, 117, 252, 0.25);
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
