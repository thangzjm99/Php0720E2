$(document).ready(function() {
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    var regexMail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    $('#sub-button').click(function() {
        if (!regexName.test($('#name').val()) || $('#name').val() == "") {
            alert('Tên nhập không dấu và không số');
            return false;
        } else if (!regexPhone.test($('#num').val()) || isNaN(parseInt($("#num").val()))) {
            alert('Vui lòng nhập đúng số điện thoại gồm 10 số');
            return false;
        } else if (!regexMail.test($('#email').val()) || $('#email').val() == "") {
            alert('Vui lòng nhập đúng định dạng email');
            return false;
        } else if ($('#textarea').val() == "") {
            alert('Nội dung không được để trống');
            return false;
        } else {
            alert('Gửi thông tin liên hệ thành công');
            alert(location.href = "http://itplus-academy.edu.vn/");
        }

    });
});