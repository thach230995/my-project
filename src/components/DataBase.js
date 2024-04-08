import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceApi } from '../services/Api';

function DuLieuSanBongDa() {
    const params = useParams()
    const { id } = params;

    const [detail ,setDetail] = useState({})
  
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
        <div className='container mx-auto p-9 space-y-4'>
                    <h2>{detail.name}</h2>
                    <p><strong>Địa chỉ:</strong> {detail.address}</p>
                    <p><strong>Mô tả:</strong> {detail.description}</p>
                    <p><strong>Giờ mở cửa:</strong> {detail.gioMoCua}</p>
                    <img src={detail.hinhAnh} alt={detail.diaDiem} />
        </div>
    );
}

export default DuLieuSanBongDa;
