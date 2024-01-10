'use client'
import React from 'react';
import { Button, Result } from 'antd';
export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, Trang bạn tìm không tồn tại..."
        extra={<Button type="primary" href='/'>Quay về Trang Chủ</Button>}
      />
    </div>
  );
}
