import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMap from './GoogleMap';

const Main = () => {
  const dispatch = useDispatch();
  const menuActive = useSelector((state) => state.menuActive);

  const handleMapClick = (coords) => {
    // Xử lý sự kiện click trên bản đồ
    console.log('Selected location:', coords);
  };

  return (
    <div className="flex flex-row h-full">
      {/* Biểu mẫu bên trái */}
      <div className="w-1/4 p-4">
        <h1>Form</h1>
        {/* Thêm các trường biểu mẫu khác ở đây */}
      </div>
      {/* Bản đồ bên phải */}
      <div className="w-3/4">
        <GoogleMap apiKey="YOUR_API_KEY" onMapClick={handleMapClick} />
      </div>
    </div>
  );
};

export default Main;
