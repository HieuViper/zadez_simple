export const templateInfoOrder = (order) => {
  console.log("🚀 ~ templateInfoOrder ~ order:", order);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Xác Nhận Đơn Hàng</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
  
          .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          h2 {
              color: #333333;
          }
  
          p {
              color: #666666;
          }
  
          .order-details {
              margin-top: 20px;
          }
  
          .order-item {
              border-bottom: 1px solid #eeeeee;
              padding: 10px 0;
          }
  
          .footer {
              margin-top: 20px;
              text-align: center;
              color: #999999;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Xác Nhận Đơn Hàng</h2>
          <p>Cảm ơn KH <strong>${
            order.customers.name
          }</strong> đã đặt hàng tại cửa hàng chúng tôi. Dưới đây là chi tiết đơn hàng của bạn:</p>
  
          <div class="order-details">
          ${order.order_detail.map(
            (item) =>
              `<div class="order-item">
            <strong>Sản phẩm:</strong> ${item.products.name}<br>
            <strong>Giá:</strong> $${item.products.price.toLocaleString()}<br>
            <strong>Số lượng:</strong> ${item.amount}
        </div>`
          )}
          <div>Địa chỉ gửi tới : ${order.customers.cities.name}, ${
    order.customers.districts.name
  }, ${order.customers.wards.name}, ${order.customers.address}</div>
              
          </div>
  
          <p><strong>Tổng cộng:</strong> $</p>
  
          <div class="footer">
              <p>Cảm ơn bạn đã mua hàng! Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ chúng tôi.</p>
          </div>
      </div>
  </body>
  </html>
  `;
};
