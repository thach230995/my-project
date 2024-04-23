import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import A1 from '../assets/img/chuyenviet.webp';
import DataBase from './DataBase';
import { ServiceApi } from '../services/Api';
import { Checkbox } from 'antd';

function PlaygroundInfo({ id, name, address, price, location, rate,type }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Thông tin đặt sân:', formData);
    const res = await ServiceApi.createInformation(formData);

    if (res.ok) {
      alert('Đăng ký thành công');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        message: ''
      });
    } setShowForm(false);
  };

  return (
    <div className=" border p-4 my-4 rounded-md shadow-lg shadow-cyan-500/50 mt-4 hover:bg-red-50">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p><strong>Khu vực:</strong> {location && location.name}</p>
      <p><strong>Địa chỉ:</strong> {address}</p>
      <p><strong>Điểm đánh giá:</strong> {rate}</p>
      <p><strong>loại sân:</strong> {type}</p>
      <p><strong>Giá thuê:</strong> {price} VNĐ</p>
      <img src={A1} alt={name} className="w-50 h-50 rounded-md mb-2" />
      <div className='flex justify-center space-x-4 '>
        <Link to={`/chi-tiet-san/${id}`} className="button bg-blue-500 text-white px-4 py-2 rounded-md shadow-md mt-4 hover:bg-blue-700 ">Chi tiết sân</Link>

        <button onClick={() => setShowForm(true)} className="button bg-blue-500 text-white px-2 py-2 rounded-md shadow-md mt-4 hover:bg-blue-700 gap-50">Đặt sân</button>
      </div >
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Họ và tên" className="border border-gray-300 rounded-md p-2 block w-full mb-2" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Số điện thoại" className="border border-gray-300 rounded-md p-2 block w-full mb-2" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border border-gray-300 rounded-md p-2 block w-full mb-2" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Ghi chú" className="border border-gray-300 rounded-md p-2 block w-full mb-2" />
          <button type="submit" className="outline-none bg-blue-500  hover:bg-blue-700 px-8 py-2 shadow-md text-white mt-4">Gửi đặt sân</button>
        </form>
      )}
    </div>
  );
}

function PlaygroundList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const location = searchParams.get("location");
  const rate = searchParams.get("rate");
  const type = searchParams.get("type");
  const [pitchs, setPitchs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sliderValues, setSliderValues] = useState([10, 150]);

  const categorySelected = searchParams.get('categoryId');

  const getPitch = async () => {
    const res = await ServiceApi.getPitchs({
      _expand: "location",
      ...location ? { locationId: location } : {},
      ...name ? { name_like: name } : {},
      ...(type ? { type: type } : {}), // Lọc theo loại sân bóng nếu có
      ...(rate || type) ? { [rate ? 'rate' : 'type']: rate || type } : {}, // Sử dụng rate nếu có, ngược lại sử dụng type
    });
    

    if (res.ok) {
      setPitchs(res.data);
    }
  }

  const getCategories = async () => {
    const res = await ServiceApi.getCategories();
    if (res.ok) {
      setCategories(res.data);
    }
  };

  const handleFilterByRate = (value) => {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete('rate');
      } else {
        prevParams.set('rate', value);
      }
      return prevParams;
    });
  };
  const handleFilterByType = (value) => {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete('type');
      } else {
        prevParams.set('type', value);
      }
      return prevParams;
    });
  };
  const handleFilterProductByCategory = (value) => {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete('categoryId');
      } else {
        prevParams.set('categoryId', value);
      }
      return prevParams;
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getPitch();
  }, [rate,type]);


  return (
    <div className='flex flex-row gap-4'>
      <div className=" top-0 flex flex-col w-[300px] space-y-6">
        <div>
          <p className="mb-4 font-semibold"> ĐÁNH GIÁ</p>
          <ul className="space-y-4 text-sm">
            <li className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox checked={rate === "5"} onChange={(e) => handleFilterByRate(e.target.checked ? "5" : "")}>5 Sao</Checkbox>
            </li>
            <li className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox checked={rate === "4"} onChange={(e) => handleFilterByRate(e.target.checked ? "4" : "")}>4 Sao</Checkbox>
            </li>
            <li className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox checked={rate === "3"} onChange={(e) => handleFilterByRate(e.target.checked ? "3" : "")}>3 Sao</Checkbox>
            </li>
            <li className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox checked={rate === "2"} onChange={(e) => handleFilterByRate(e.target.checked ? "2" : "")}>2 Sao</Checkbox>
            </li>
            <li className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox checked={rate === "1"} onChange={(e) => handleFilterByRate(e.target.checked ? "1" : "")}>1 Sao</Checkbox>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="mb-4 font-semibold">Loại sân</p>
          <ul className="space-y-4 text-sm">
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>sân 5 người</Checkbox>
            </li>
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>sân 7 người</Checkbox>
            </li>
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>sân futsal</Checkbox>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-semibold">Dịch vụ</p>
          <ul className="space-y-4 text-sm">
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>có chỗ để xe</Checkbox>
            </li>
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>căn teen</Checkbox>
            </li>
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>cửa hàng đồ thể thao</Checkbox>
            </li>
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>tổ chức giải đấu</Checkbox>
            </li>
            <li onClick={() => handleFilterProductByCategory('')} className={`cursor-pointer ${!categorySelected && 'font-semibold'}`}>
              <Checkbox>đào tạo huấn luyện</Checkbox>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-1 flex-col'>
        <div className="grid grid-cols-3 gap-4">
          {pitchs.map(pitch => (
            <div key={pitch.id}>
              <PlaygroundInfo key={pitch.id} {...pitch} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaygroundList;


