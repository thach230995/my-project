import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd'; 
import '../index.css';
const { Search } = Input; 

function Menu() {
    const [searchValue, setSearchValue] = useState(''); 

    
    const handleSearch = (value) => {
        
        console.log('Searching for:', value);
    };

    return (
        <header className="bg-amber-200 font-bold h-[70px] w-full right-0 max-w-full flex flex-row items-center justify-between relative">
            <div className='flex items-center relative z-10'>
                <Link to="/" className="text-2xl  font-bold pl-5">Đặt sân bóng</Link>
            </div>
            <nav className="flex flex-row gap-10 pr-20 text-sky-700 z-10 relative">
                <ul className="flex flex-row gap-10 text-sky-700 z-10 relative">
                    <li><Link to="/" className="hover:text-blue-400">Trang chủ</Link></li>
                    <li><Link to="/gioi-thieu" className="hover:text-blue-400" >Giới thiệu</Link></li>
                    <li><Link to="/danh-sach-san" className="hover:text-blue-400">Đặt Sân Trực Tuyến</Link></li>
                    <li><Link to="/lien-he" className="hover:text-blue-400" >Hỗ Trợ Khách Hàng</Link></li>
                    <li><Link to="/dang-ky-doi-tac" className="hover:text-blue-400">Đăng ký đối tác</Link></li>
                    <li><Link to="/trang-quan-tri-vien" className=" hover:text-blue-400" >Admin</Link></li>
                    
                </ul>
            </nav>
        </header>
 );
}


export default Menu;
