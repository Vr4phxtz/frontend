// pages/Login.js

import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>สมัครสมาชิก</title>
        {/* Bootstrap CDN */}
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
                <form>
                  {/* Username */}
                  <div className="col-mb-3">
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

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                    <input type="password" className="form-control" id="password" placeholder="กรอกรหัสผ่าน" />
                  </div>

                  {/* คำนำหน้าชื่อ */}
                  <div className="col-md-3">
            <label htmlFor="validationCustom04" className="form-label">คำนำหน้าชื่อ</label>
            <select className="form-select" id="validationCustom04" required>
              <option disabled value="">เลือก...</option>
              <option value="1">นาย</option>
              <option value="2">นางสาว</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>

                  {/* ชื่อ */}
                  <div className="row">
                  <div className="col-md-6">
           <label htmlFor="validationCustom03" className="form-label">ชื่อ</label>
           <input
             type="text"
            className="form-control"
            placeholder="name"
            aria-label="Username"
            aria-describedby="basic-addon1"
             />
          <div className="invalid-feedback">Please provide a valid city.</div>
         </div>

                 {/* นามสกุล */}
               <div className="col-md-6">
               <label htmlFor="validationCustom03" className="form-label">นามสกุล</label>
              <input
                type="text"
                className="form-control"
                placeholder="lastname"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
             <div className="invalid-feedback">Please provide a valid city.</div>
            </div>
           </div>

                                     {/* ที่อยู่ */}
          <label htmlFor="validationCustom05" className="form-label">ที่อยู่</label>
            <div className="form-floating">
           <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
              <label htmlFor="floatingTextarea2">Comments</label>
               </div>

                                    {/* เพศ */}
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

                              {/* วันเกิด */}
           <div className="mb-3">
          <label htmlFor="birthday" className="form-label">วันเกิด</label>
          <input type="date" className="form-control" id="birthday" />
        </div>

                              {/* ยอมรับเงื่อนไข... */}
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="agreeTerms" />
          <label className="form-check-label" htmlFor="agreeTerms">
            ยอมรับเงื่อนไขและข้อตกลง
          </label>
        </div>

        <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">สมัครสมาชิก</button>
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
