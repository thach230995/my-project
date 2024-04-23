import React from 'react';
import '../index.css';
import B1 from '../assets/img/vienna-reyes-qCrKTET_09o-unsplash.jpg';
const Introduction = () => {
    return (
        <div className='relative'>
        <div className=" bg-gray-100 text-gray-800 ">
            <div className=" container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">Giới Thiệu</h1>
                <p className="mb-6">Chào mừng bạn đến với Đặt Sân Trực Tuyến - nền tảng đặt sân thể thao hàng đầu tại Đà Nẵng!</p>

                <h2 className="text-2xl font-bold mb-2 text-blue-600">Về Chúng Tôi</h2>
                <p className="mb-6">Đặt Sân Trực Tuyến ra đời với sứ mệnh mang lại trải nghiệm thuận tiện và dễ dàng nhất cho việc tìm kiếm và đặt sân thể thao. Chúng tôi cung cấp một nền tảng trực tuyến đáng tin cậy, giúp người dùng có thể dễ dàng tìm kiếm và đặt sân một cách nhanh chóng và tiện lợi.</p>

                <h2 className="text-2xl font-bold mb-2 text-blue-600">Đặc Điểm</h2>
                <p className="mb-2"><span className="font-bold">1. Tìm Kiếm Sân Thể Thao:</span> Với công cụ tìm kiếm tiên tiến của chúng tôi, bạn có thể dễ dàng lọc và chọn lựa sân thể thao phù hợp với nhu cầu của mình, từ bóng đá, cầu lông, tennis, đến các loại sân khác.</p>
                <p className="mb-2"><span className="font-bold">2. Xem Chi Tiết và Đánh Giá Sân:</span> Trước khi quyết định đặt sân, bạn có thể xem chi tiết về sân bao gồm địa chỉ, giá cả, hình ảnh và nhận xét từ cộng đồng người dùng.</p>
                <p className="mb-2"><span className="font-bold">3. Đặt Sân Trực Tuyến:</span> Với giao diện đơn giản và dễ sử dụng, việc đặt sân trở nên đơn giản chỉ trong vài cú click chuột. Bạn có thể chọn thời gian và ngày phù hợp và đặt sân ngay lập tức.</p>
                <p className="mb-2"><span className="font-bold">4. Hỗ Trợ Khách Hàng:</span> Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn lòng hỗ trợ bạn trong quá trình sử dụng dịch vụ và giải đáp mọi thắc mắc của bạn.</p>

                <h2 className="text-2xl font-bold mb-2 text-blue-600">Bắt Đầu Ngay</h2>
                <a href="/danh-sach-san" className="ml-[70%] mb-[50%]  bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Đặt Sân Ngay</a>
                <p className="mb-6">Hãy bắt đầu trải nghiệm ngay hôm nay và khám phá thế giới sân chơi thể thao tại Đà Nẵng cùng Đặt Sân Trực Tuyến!</p>
              
            </div>
        </div>
    </div>
    );
}

export default Introduction;
