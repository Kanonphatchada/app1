import React from "react";
export default function Home() {
    return (
        <p style={{ textAlign: 'center' }}>
            <h3>ยินดีต้องรับสู่ React Store</h3><br />
            รายชื่อ <a href="/products">สินค้า</a>ที่เรามีจัดจำหน่าย <br />
            เเต่ท่านต้องเป็น<a href="/member">สมาชิก</a>จึงจะสั่งซื้อได้<br />
            หากมีข้อสงสัย กรุณา <a href="/contact">ติดต่อเรา</a>
        </p>
    )
}