// Script để làm mượt quá trình cuộn đến các phần
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Thêm hiệu ứng fixed header khi cuộn
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Xử lý form liên hệ - bạn có thể sửa đổi để kết nối với backend hoặc dịch vụ gửi email
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Lấy giá trị từ các trường nhập liệu
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Hiển thị thông báo khi gửi thành công
    alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công.`);
    
    // Reset form
    this.reset();
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các nút để mở modal
    const modalButtons = document.querySelectorAll('[data-modal]');
    
    // Lắng nghe sự kiện click trên mỗi nút
    modalButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Lấy ID của modal cần mở
            const modalId = this.getAttribute('data-modal');
            
            // Mở modal
            document.getElementById(modalId).style.display = 'block';
            
            // Chặn cuộn trang khi modal đang mở
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Lấy tất cả các nút đóng modal
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Lắng nghe sự kiện click trên nút đóng
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Tìm modal container cha
            const modalContainer = this.closest('.modal-container');
            
            // Đóng modal
            modalContainer.style.display = 'none';
            
            // Cho phép cuộn trang lại
            document.body.style.overflow = '';
        });
    });
    
    // Đóng modal khi click vào nền bên ngoài
    const modals = document.querySelectorAll('.modal-container');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            // Chỉ đóng nếu click vào phần ngoài modal
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
});