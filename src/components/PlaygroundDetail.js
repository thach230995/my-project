import React, { useEffect, useState } from 'react';
import { ServiceApi } from '../services/Api';
import { useParams  } from 'react-router-dom';
import T from '../assets/img/pexels-markusspiske-114296.jpg';

function PlaygroundDetail() {
  const { id } = useParams();

  const [detail ,setDetail] = useState()

  const getPitchDetail = async() => {
    const res = await ServiceApi.getPitchById(id)

    if(res.ok){
      setDetail(res.data)
    }
  }

  useEffect(() => {
    if(id){
      getPitchDetail()
    }
  }, [id])

  return (
    <div className='relative'>
    
    <div className='absolute flex items-center justify-center'>
      <div className='container mx-auto p-9 text-black'>
      <img src={T} alt="" className="inset-x-0 top-0 h-[570px] w-full object-cover" />
        <h1 className="text-2xl font-semibold mb-4">Thông tin chi tiết sân bóng</h1>
        {detail && (
          <>
            <p><strong>Tên sân:</strong> {detail.name}</p>
            <p><strong>Địa chỉ:</strong> {detail.address}</p>
            <p><strong>Giá thuê:</strong> {detail.price} VNĐ</p>
            <p><strong>Mô tả:</strong> {detail.description}</p>
          </>
        )}
      </div>
    </div>
  </div>
  );
}

export default PlaygroundDetail;

