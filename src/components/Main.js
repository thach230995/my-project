import React, { useState } from 'react';
import BackgroundImage from '../assets/img/emilio-garcia-AWdCgDDedH0-unsplash.jpg';
import { useNavigate } from 'react-router-dom';


function Main() {
  let navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  function handleSearch() {
    navigate(`/danh-sach-san?location=${location}&name=${name}`)
    
	}
 
  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className='relative'>
      <img src={BackgroundImage} alt="" className="absolute inset-x-0 top-0 h-[570px] w-[100%]" />
      <div className="absolute inset-0 inset-x-1.5 flex flex-col items-center justify-center font-bold text-center">
        <div className="bg-orange-500 absolute left-20 top-10 w-[550px]  text-white p-4 rounded-md ">
          <h1 className="text-3xl font-bold mb-4 text-white">Find Your Stadium</h1>
          <p className="text-lg text-gray-700 mb-6">Tìm kiếm sân chơi thể thao khắp Đà Nẵng</p>
          <label htmlFor="sport" className="mr-2 leading-10">Chọn khu vực:</label>
         <div className='flex flex-col gap-4'>
         <select id="sport" name="sport" value={location} onChange={onChangeLocation} className="border-2 border-white rounded-md px-2 py-1 bg-blue-700">
            <option key="1" value="hải châu">Hải Châu</option>
            <option key="2" value="liên chiểu  ">Liên Chiểu</option>
            <option key="3" value="ngũ hành sơn">Ngũ hành sơn</option>
            <option key="4" value="sơn trà">Sơn Trà</option>
            <option key="5" value="cẩm lệ">Cẩm Lệ</option>
            <option key="6" value="thanh khê">Thanh Khê</option>
          </select>
          
          <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập khu vực bạn muốn tìm kiếm..."
                className='px-4 py-2 rounded-md text-black'
            />    
          <button onClick={handleSearch} className="outline-none bg-blue-500 hover:bg-blue-700 px-8 py-2 text-white">Tìm kiếm</button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
