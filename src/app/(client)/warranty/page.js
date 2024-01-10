'use client'
import { Button } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

const warranty = () => {
    const QRCode = [
        { image: "/images/QRCode-Call.png", name: "Tổng Đài CSKH", short: "Số điện thoại (028).7777.0053 hoặc 1900.0053, thời gian hoạt động của tổng đài CSKH từ 8h30-12h00 và 13h30-18h00 các ngày từ thứ Hai đến thứ Sáu.", button: "TỔNG ĐÀI: (028) 7777.0053", link: "" },
        { image: "/images/QRCode-Zalo.png", name: "Tư Vấn Qua Zalo Chat", short: "Đây là kênh tư vấn và hỗ trợ khách hàng trực tuyến thông qua kênh Zalo chính thức của ZADEZ Việt Nam, vui lòng scan QR code hoặc nhấn vào link để kết nối.", button: "TƯ VẤN QUA ZALO", link: "https://zalo.me/3126944695787017498" },
        { image: "/images/QRCode-Messenger.png", name: "Tư Vấn Qua Facebook Chat", short: "Đây là kênh tư vấn và hỗ trợ khách hàng trực tuyến thông qua Fanpage chính thức của ZADEZ Việt Nam, vui lòng scan QR code hoặc nhấn vào nút bên dưới để bắt đầu kết nối.", button: "TƯ VẤN QUA MESSENGER", link: "https://www.messenger.com/" },
        { image: "/images/QRCode-Youtube.png", name: "Hướng Dẫn Qua YouTube", short: "Đây là kênh Youtube chính thức của ZADEZ Việt Nam, cập nhật những clip giới thiệu về sản phẩm cũng như hướng dẫn xử lý các sự cố thường gặp. Quý khách hàng vui lòng scan QR code hoặc nhấn vào link để kết nối.", button: "XEM HƯỚNG DẪN TẠI YOUTUBE", link: "https://www.youtube.com/zadezvietnam" },
    ]

    return (
        <div>

            <section className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-4xl text-red-500'>
                    Trung Tâm Bảo Hành – Chăm Sóc Khách Hàng
                </h1>
                <p className='text-[#999999] text-base'>Chào mừng Quý khách hàng đến với Trung tâm bảo hành và Chăm sóc khách hàng của ZADEZ tại Việt Nam. Quý khách hàng có thể yêu cầu tư vấn/ hỗ trợ trực tuyến thông qua các kênh CSKH chính thức của ZADEZ hoặc liên hệ trực tiếp đến Trung tâm CSKH.</p>
            </section>
            <section className='flex flex-col justify-center items-center text-center'>
                <h4 className='text-2xl text-red-500'>Trung Tâm Bảo Hành & CSKH Tại Tp. Hồ Chí Minh</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0378510093133!2d106.73422791474857!3d10.731564092352032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752594bfc21feb%3A0xab1bca093ed432be!2sZadez%20Vietnam%20Customer%20services!5e0!3m2!1sen!2s!4v1666859573479!5m2!1sen!2s"
                    width={1200}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
            <section className='grid grid-cols-4'>
                <div className='col-span-4 md:col-span-1'>
                    <Image width={295} height={295} alt='Chăm sóc khách hàng' src='/images/customer-service.png' />
                </div>
                <div className='col-span-4 md:col-span-3'>
                    <h4 className='text-red-500 text-lg'>Địa Chỉ Trung Tâm CSKH & Bảo Hành:</h4>
                    <strong>– B97 Phú Thuận, phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh</strong>
                    <p>(cách ngã tư Phú Thuận – Huỳnh Tấn Phát khoảng 500m về hướng chung cư Ngọc Lan, liền kề trường tiểu học Lê Anh Xuân)</p>
                    <p>– Có khu vực đỗ riêng cho khách hàng di chuyển bằng xe 4 chỗ/ 7 chỗ.</p>
                    <p>– Điện thoại: (028) 7777.0053</p>
                    <h4 className='text-red-500 text-lg'>Thời gian làm việc:</h4>
                    <p>– <span className='text-red-500'>Từ thứ Hai đến thứ Sáu</span> các ngày trong tuần (trừ Lễ/ Tết)– Từ thứ Hai đến thứ Sáu các ngày trong tuần (trừ Lễ/ Tết)</p>
                    <p>– Thời gian làm việc buổi sáng: <span className='text-red-500'>từ 8h30 đến 12h00</span></p>
                    <p>– Thời gian làm việc buổi chiều: <span className='text-red-500'>từ 13h30 đến 18h00</span></p>
                </div>
            </section>
            <section>
                <p>Quý khách hàng nếu có vấn đề chưa hài lòng về chất lượng phục vụ hoặc cần khiếu nại về thái độ làm việc của nhân viên tại các trung tâm Chăm sóc Khách hàng, xin vui lòng gửi email về địa chỉ chamsockhachhang@zadez.vn .</p>
                <p>Rất hân hạnh được phục vụ quý khách hàng.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {QRCode?.map((item, i) => (
                        <div key={i} className='col-span-2 md:col-span-1 grid-cols-3 flex'>
                            <div className='col-span-3 md:col-span-1 '>
                                <Image width={218} height={272} alt={item.name} src={item.image} />
                            </div>
                            <div className='col-span-3 md:col-span-2 px-4'>
                                <h4 className='text-red-500'>{item.name}</h4>
                                <p>{item.short}</p>
                                <Button href={item.link}>{item.button}</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default warranty