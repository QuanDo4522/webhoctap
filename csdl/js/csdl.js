let content = document.getElementsByClassName('vungdl')[0];
function Click(){
    if(content.style.left == '-500px'){
        content.style.left ='0';
    } else {
        content.style.left ='-500px';
    }
}
function tim(){
    let nhap=document.getElementById('nhap').value;
    if(nhap==''){
        alert("Vui lòng nhập thông tin cần tìm kiếm!");
    }
}
function thoat(){
    confirm("Bạn có chắc chắn muốn thoát không?");
}