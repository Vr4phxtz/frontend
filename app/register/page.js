'use client'

import { useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      return Swal.fire({
        icon: 'warning',
        title: 'กรุณายอมรับเงื่อนไข',
      });
    }

    // fullname ตาม format ที่ใช้งานใน API
    const fullname = `${firstname} `;

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,          // ยังส่งคำนำหน้าแยกไปด้วย เผื่อ API ต้องการเก็บไว้
          firstname,      // ชื่อจริงอย่างเดียว
          lastname,
          fullname,       // รวมชื่อกับนามสกุล (ไม่มีคำนำหน้า)
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
        }).then(() => {
          router.push('/login');  // เปลี่ยนเป็น /login ให้ตรงกับหน้า login ของคุณ
        });

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

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow rounded-4">
              <div className="card-body">
                <h3 className="text-center mb-4">สมัครสมาชิก</h3>
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label">ชื่อผู้ใช้</label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">รหัสผ่าน</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* คำนำหน้า */}
                  <div className="mb-3">
                    <label className="form-label">คำนำหน้าชื่อ</label>
                    <select
                      className="form-select"
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
                      <label className="form-label">ชื่อ</label>
                      <input
                        type="text"
                        className="form-control"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">นามสกุล</label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* ที่อยู่ */}
                  <div className="mb-3">
                    <label className="form-label">ที่อยู่</label>
                    <textarea
                      className="form-control"
                      style={{ height: 100 }}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  {/* เพศ */}
                  <div className="mb-3">
                    <label className="form-label">เพศ</label>
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
                    <label className="form-label">วันเกิด</label>
                    <input
                      type="date"
                      className="form-control"
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
                    <label className="form-check-label">
                      ยอมรับเงื่อนไขและข้อตกลง
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">
                      สมัครสมาชิก
                    </button>
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
