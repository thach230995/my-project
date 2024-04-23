import React from 'react';
import '../index.css';
import D3 from '../assets/img/annie-spratt-goholCAVTRs-unsplash.jpg';
import D4 from '../assets/img/daniel-k-cheung-cPF2nlWcMY4-unsplash.jpg';
import D5 from '../assets/img/riho-kroll-m4sGYaHYN5o-unsplash.jpg';
import D6 from '../assets/img/vienna-reyes-qCrKTET_09o-unsplash.jpg';

const ContactPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <img src={D6} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <div className='relative'>
            <img src={D3} alt="" className="" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="text-xl font-bold text-amber-300">Thông tin liên lạc</p>
              <p>Địa chỉ: 216 Nguyễn Công Trứ, An Hải Bắc, Thành Phố Đà Nẵng</p>
              <p>Số điện thoại: 0345616160</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <div className='relative'>
            <img src={D4} alt="" className="" />
            <div className="absolute bottom-0 left-0 right-0 bg-black  text-white p-4">
              <p className="text-xl font-bold text-amber-300">Email</p>
              <p><strong className='text-xl font-bold'>Email cho chúng tôi để nhận phản hồi & tư vấn thắc mắc:</strong></p>
              <a href="mailto:thachngocpham95@gmail.com" className="text-blue-500">thachngocpham95@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <div className='relative'>
            <img src={D5} alt="" className="" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="text-xl font-bold text-amber-300">Hỗ trợ trực tuyến</p>
              <p><strong className='text-xl font-bold'>Nhắn tin cho chúng tôi để hỗ trợ bạn nhanh nhất có thể:</strong></p>
              <a href="https://zalo.me/chat.zalo.me/0375983778" className="text-blue-500">Link to your Zalo profile</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactPage;
