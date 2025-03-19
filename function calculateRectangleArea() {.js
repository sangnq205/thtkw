function calculateRectangleArea() {
    let length = prompt("Nhập chiều dài của hình chữ nhật:");
    let width = prompt("Nhập chiều rộng của hình chữ nhật:");
    
    // Chuyển đổi chuỗi nhập vào thành số
    length = parseFloat(length);
    width = parseFloat(width);
    
    // Kiểm tra tính hợp lệ của dữ liệu nhập
    if (isNaN(length) || isNaN(width)) {
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }
    
    if (length <= 0 || width <= 0) {
        alert("Chiều dài và chiều rộng phải là số dương!");
        return;
    }
    
    let area = length * width;
    alert(`Diện tích của hình chữ nhật là: ${area}`);
}

// Gọi hàm để chạy chương trình
calculateRectangleArea();
