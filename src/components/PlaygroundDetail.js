import React, { useEffect, useState } from 'react';
import { ServiceApi } from '../services/Api';

function PlaygroundDetail({ match }) {
  const { id } = match.params;

  const [detail ,setDetail] = useState(undefined)

  const getPitchDetail = async() => {
    const res = await ServiceApi.getPitchById(id)

    if(res.ok){
      setDetail(res.data)
    }
  }

  useEffect(() => {
    getPitchDetail()
  }, [id])

  return (
    <div className='container mx-auto p-9'>
      <h1 className="text-2xl font-semibold mb-4">Thông tin chi tiết sân bóng</h1>
      <p><strong>Tên sân:</strong> {detail.name}</p>
      <p><strong>Địa chỉ:</strong> {detail.address}</p>
      <p><strong>Giá thuê:</strong> {detail.price} VNĐ</p>
      <p><strong>Mô tả:</strong> {detail.description}</p>
    </div>
  );
}

export default PlaygroundDetail;

