import React, { useState } from 'react';
import D2 from '../assets/img/jonathan-petersson-ARU18GpF6QQ-unsplash.jpg';
import '../index.css';
import Main from './Main';
import {ServiceApi} from '../services/Api'
function PartnerRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    // Kiểm tra xem các trường đã được điền đầy đủ hay không
    if (formData.fullName && formData.phone && formData.email && formData.address && formData.message) {
      // Gửi dữ liệu đăng ký đối tác đi ở đây
      console.log('Đăng ký đối tác:', formData);
      // Xóa dữ liệu sau khi gửi thành công
   

     const res = await ServiceApi.createPartner(formData);

     if(res.ok){
      alert('Đăng ký thành công');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        message: ''
      });
     } else {
      alert('Đăng ký thất bại');

     }
     
    } else {
      alert('Vui lòng điền đầy đủ thông tin');
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0">
        <img src={D2} alt="" className="h-[570px] w-[100%]" />
      </div>
      <div className="font-bold max-w-lg mx-auto p-6 bg-white rounded-md shadow-md  relative z-10">
        <h2 className='text-5xl font-semibold text-center text-gray-800 mb-6 text-red-700'>Đăng ký đối tác</h2>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <div className="w-full px-3 py-2 border rounded-md shadow-sm">
            <label htmlFor="fullName" className='block mb-1 text-sm font-semibold text-gray-600'>Họ và tên:</label>
            <input type="text" className="w-full outline-none" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="w-full px-3 py-2 border rounded-md shadow-sm">
            <label htmlFor="phone" className='block mb-1 text-sm font-semibold text-gray-600'>Điện thoại:</label>
            <input type="tel" id="phone" className="w-full outline-none" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="w-full px-3 py-2 border rounded-md shadow-sm">
            <label htmlFor="email" className='block mb-1 text-sm font-semibold text-gray-600'>Email:</label>
            <input type="email" id="email" className="w-full outline-none" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="w-full px-3 py-2 border rounded-md shadow-sm">
            <label htmlFor="address" className='block mb-1 text-sm font-semibold text-gray-600'>Địa chỉ:</label>
            <input type="text" id="address" className="w-full outline-none" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="w-full px-3 py-2 border rounded-md shadow-sm">
            <label htmlFor="message" className='block mb-1 text-sm font-semibold text-gray-600'>Nội dung:</label>
            <textarea id="message" name="message" className="w-full outline-none" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-600">Gửi liên hệ</button>
        </form>
      </div>
    </div>
  );
}

export default PartnerRegistration;
