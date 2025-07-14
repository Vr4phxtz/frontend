"use client";

import { useEffect } from 'react';
import Head from 'next/head';

export default function Register() {
  useEffect(() => {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>ลงทะเบียน</title>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="container mt-5">
        <h2 className="mb-4">ลงทะเบียน</h2>
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-4">
            <label htmlFor="validationCustomUsername" className="form-label">ชื่อผู้ใช้</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input
                type="text"
                className="form-control"
                placeholder="ชื่อผู้ใช้"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
                <label htmlFor="inputPassword4" className="form-label">Password</label>
               <input type="password" className="form-control" placeholder="รหัสผ่าน" id="inputPassword4" />
              </div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="validationCustom04" className="form-label">คำนำหน้าชื่อ</label>
            <select className="form-select" id="validationCustom04" required>
              <option disabled value="">เลือก...</option>
              <option value="1">นาย</option>
              <option value="2">นางสาว</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="validationCustom03" className="form-label">ชื่อ</label>
             <input type="text" className="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1" />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="validationCustom03" className="form-label">นามสกุล</label>
             <input type="text" className="form-control" placeholder="lastname" aria-label="Username" aria-describedby="basic-addon1" />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>

               <label htmlFor="validationCustom05" className="form-label">ที่อยู่</label>
            <div className="form-floating">
           <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
              <label htmlFor="floatingTextarea2">Comments</label>
               </div>

          <div>
            <label htmlFor="validationCustom05" className="form-label">เพศ</label>
              <div className="form-check">
               <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                <label className="form-check-label" htmlFor="radioDefault1">
                 ชาย
               </label>
          </div>
                <div className="form-check">
                 <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" defaultChecked />
                   <label className="form-check-label" htmlFor="radioDefault2">
                    หญิง
                   </label>
             </div>
           </div>

             <div className="mb-3">
          <label htmlFor="birthday" className="form-label">วันเกิด</label>
          <input type="date" className="form-control" id="birthday" />
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="agreeTerms" />
          <label className="form-check-label" htmlFor="agreeTerms">
            ยอมรับเงื่อนไขและข้อตกลง
          </label>
        </div>
        <button type="submit" className="btn btn-primary">ลงทะเบียน</button>
        </form>
      </div>
    </>
  );
}