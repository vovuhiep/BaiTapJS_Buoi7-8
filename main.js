function getEle(id) {
    return document.getElementById(id);
}
var listNumber = [];
getEle("themSo").onclick = function () {
    var number = getEle("soNguyen").value * 1;
    console.log(number);
    listNumber.push(number);
    console.log(listNumber);
    getEle("soHienCo").innerHTML = listNumber;
}
getEle("tongSoDuong").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var total = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (item > 0) {
            total += item;
        }
    }
    console.log("Tổng số dương là: " + total);
    getEle("ketQua").innerHTML = total;
}
getEle("cacSoDuong").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var cacSoDuong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var soDuong = listNumber[i];
        if (soDuong > 0) {
            cacSoDuong = cacSoDuong + 1;
        }
    }
    console.log("Số lượng số dương là: " + cacSoDuong);
    getEle("ketQua").innerHTML = cacSoDuong;
}
document.getElementById("soNhoNhat").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var min = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] < min) {
            min = listNumber[i];
        }
    }
    document.getElementById("ketQua").innerHTML = min;
}
document.getElementById("soDuongNhoNhat").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var minDuong
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            minDuong = listNumber[i];
            break;
        }
    }
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0 && listNumber[i] < minDuong) {
            minDuong = listNumber[i];
        }
    }
    document.getElementById("ketQua").innerHTML = minDuong;
}
document.getElementById("soChanCuoiCung").onclick = function () {
    var chanCuoi = 0;
    if (listNumber.length === 0) {
        chanCuoi = -1;
    }
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            chanCuoi = listNumber[i];
            break;
        }
    }
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            chanCuoi = listNumber[i];
        }
    }
    document.getElementById("ketQua").innerHTML = chanCuoi;
}
document.getElementById("soTangDan").onclick = function () {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[j];
                listNumber[j] = listNumber[i];
                listNumber[i] = temp;
            }
        }
    }
    document.getElementById("ketQua").innerHTML = listNumber;
}
document.getElementById("soSanhAmDuong").onclick = function () {
    var tongSoAm = 0;
    var tongSoDuong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var soAm = listNumber[i];
        if (soAm < 0) {
            tongSoAm = tongSoAm + 1;
        }
    }
    console.log(tongSoAm);

    for (var i = 0; i < listNumber.length; i++) {
        var soDuong = listNumber[i];
        if (soDuong > 0) {
            tongSoDuong = tongSoDuong + 1;
        }
    }
    console.log(tongSoDuong);
    var tongSo ="";
    if (tongSoDuong > tongSoAm) {
        tongSo = "Tổng số dương lớn hơn tổng số âm";
    }else if (tongSoDuong < tongSoAm){
        tongSo = "Tổng số âm lớn hơn tổng số dương";
    } else if (tongSoAm = tongSoDuong){
        tongSo = "Tổng hai số bằng nhau";
    }
    document.getElementById("ketQua").innerHTML = tongSo;
}
document.getElementById("soNguyenToDauTien").onclick = function () {
    var snt = -1;
    for (var i = 0; i < listNumber.length; i++){
        var flag = true;
        console.log('i: ',i)
        for (var j = 2; j < listNumber[i]; j++){
            if (listNumber[i] % j == 0) {
                flag = false;
                break
            }
        }
        if (flag == true) {
            snt = listNumber[i];
            break
        }
    }
    document.getElementById("ketQua").innerHTML = snt;
}
document.getElementById("daoViTri").onclick = function () {
    var viTri1 = document.getElementById("viTri1").value*1;
    var viTri2 = document.getElementById("viTri2").value*1;
    var number = listNumber[viTri1];
    listNumber[viTri1] = listNumber[viTri2];
    listNumber[viTri2] = number;
    console.log(listNumber)
    document.getElementById("ketQua").innerHTML = listNumber;
}


// document.getElementById("daoViTri").onclick = function () {
//     var viTri1 = document.getElementById("viTri1").value*1;
//     var viTri2 = document.getElementById("viTri2").value*1;
//     var number = listNumber[viTri1];
//     listNumber[viTri1] =listNumber[viTri2] ;
//     listNumber[viTri2] = number;
//     console.log(listNumber)
//     document.getElementById("ketQua").innerHTML = listNumber;
// }