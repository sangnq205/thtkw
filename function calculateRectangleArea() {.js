function calculateRectangleArea() {
    let length = prompt("Nhập chiều dài của hình chữ nhật:");
    let width = prompt("Nhập chiều rộng của hình chữ nhật:");
    
    length = parseFloat(length);
    width = parseFloat(width);

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

calculateRectangleArea();
