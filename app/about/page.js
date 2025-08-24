import React from 'react';

// This is an updated About page component designed to match the user's provided image.
// It uses Tailwind CSS for styling and responsiveness.
const About = () => {
  // SVG icons for visual elements, since external packages are not supported.
  const Rocket = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2 text-indigo-600">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.75-.75-1.3-1.88-2.5-3.5L4.5 16.5z" />
      <path d="M18 10l4-4" />
      <path d="M13.5 6.5l3.5-3.5" />
      <path d="M16 12l-6 6h-2l-4 4L2 14l4-4h6l6-6z" />
      <path d="M22 22l-4-4" />
    </svg>
  );

  const Users = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2 text-indigo-600">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
  
  const Gem = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2 text-indigo-600">
      <path d="M6 3h12l3 5-9 12-9-12 3-5z" />
      <path d="M12 20v-9" />
      <path d="M2.5 8.5l2.5-4h14l2.5 4" />
      <path d="M6 14.8L4.5 17h15l-1.5-2.2" />
    </svg>
  );

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-inter text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading Section */}
        <h1 className="text-4xl font-bold mb-2">เกี่ยวกับเรา</h1>
        <p className="max-w-3xl mx-auto text-sm text-gray-600 mb-12">
          เราคือทีมผู้พัฒนาที่มุ่งมั่นสร้างสรรค์โซลูชันที่ทันสมัยและเป็นประโยชน์
          ด้วยความเชี่ยวชาญด้านเทคโนโลยีที่หลากหลาย
        </p>
      </div>

      <div className="max-w-5xl mx-auto border-t border-gray-300 pt-8 mt-8">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-start justify-start text-left mb-8">
          <div className="w-full md:w-1/4">
            <div className="flex items-center text-indigo-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">พันธกิจของเรา</h2>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <p className="text-gray-600 leading-relaxed text-sm">
              พันธกิจของเราคือการใช้เทคโนโลยีเพื่อแก้ปัญหาที่ท้าทาย
              และสร้างประสบการณ์ที่ดีที่สุดให้กับผู้ใช้งาน
              เราเชื่อในนวัตกรรม การทำงานร่วมกัน และความโปร่งใสในทุกขั้นตอน
              เพื่อให้มั่นใจว่าเราส่งมอบสิ่งที่ดีที่สุด
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
          {/* Value Card 1: Innovation */}
          <div className="py-4 border-t border-gray-300">
            <div className="flex items-center mb-1">
              <Rocket />
              <h3 className="text-lg font-semibold text-gray-800">นวัตกรรม</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">
              เราผลักดันขีดจำกัดและยอมรับความท้าทายใหม่ๆ เพื่อนำเสนอโซลูชันที่ทันสมัยอยู่เสมอ
            </p>
          </div>
          
          {/* Value Card 2: Quality */}
          <div className="py-4 border-t border-gray-300">
            <div className="flex items-center mb-1">
              <Gem />
              <h3 className="text-lg font-semibold text-gray-800">คุณภาพ</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">
              เราให้ความสำคัญกับคุณภาพในทุกรายละเอียด เพื่อให้มั่นใจว่าผลิตภัณฑ์ของเราเชื่อถือได้
            </p>
          </div>
          
          {/* Value Card 3: Collaboration */}
          <div className="py-4 border-t border-gray-300">
            <div className="flex items-center mb-1">
              <Users />
              <h3 className="text-lg font-semibold text-gray-800">ความร่วมมือ</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">
              เราเชื่อว่าการทำงานเป็นทีมจะนำไปสู่ผลลัพธ์ที่ยอดเยี่ยม
              และสร้างสรรค์สิ่งที่ไม่เคยมีมาก่อน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
