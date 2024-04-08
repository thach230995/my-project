import React, { useState } from 'react';
import D2 from '../assets/img/jonathan-petersson-ARU18GpF6QQ-unsplash.jpg';
import '../index.css';
import { ServiceApi } from '../services/Api';
// "user@code4change.dev"
// "code4change"
function PartnerRegistration() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra xem các trường đã được điền đầy đủ hay không
    if (formData.email && formData.password) {
      // Gửi dữ liệu đăng ký đối tác đi ở đây
      const res = await ServiceApi.login(formData);
      if (res.ok) {
        alert("Đăng nhập thành công");
        // Xóa dữ liệu sau khi gửi thành công
        setFormData({
          email: '',
          password: ''
        });
      } else {
        alert("Email hoặc Password không đúng")
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
      <div className="font-bold max-w-lg  mx-auto p-6 bg-white rounded-md shadow-md  relative z-10">
        <h2 className='text-5xl font-semibold text-center text-gray-800 mb-6 text-red-700'>Đăng nhập </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className="w-full px-3 py-2 border rounded-md shadow-sm">
            <label htmlFor="email" className='block mb-1 text-sm font-semibold text-gray-600'>Thông tin đăng nhập:</label>
            <input type="email" className="w-full outline-none" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="w-full px-3 py-2 border rounded-md shadow-sm">
            <label htmlFor="password" className='block mb-1 text-sm font-semibold text-gray-600'>Mật khẩu:</label>
            <input type="password" className="w-full outline-none" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-600">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

export default PartnerRegistration;
