var arrEleQLTT_ketthuc;
function loadDataQLTT_ketthuc() {
    $("#tblActQLTT_ketthuc tbody").empty();
    var strResultQLTT_ketthuc = "";
    $.ajax(
        {
            url: "https://62b47b4c530b26da4cbf9d4f.mockapi.io/QuanLyTrangTrai",
            type: "GET",
            dataType: "json",
            success: function (data) {
                arrEleQLTT_ketthuc = data;
                for (var i = 0; i < data.length; i++) {
                    strResultQLTT_ketthuc = strResultQLTT_ketthuc + "<tr>" +
                        "<td class='something' >" + data[i].id + "</td>" +
                        "<td>" + data[i].tenMuavu + "</td>" +
                        "<td>" + data[i].ngayBatdau + " - " +  data[i].ngayKetthuc  + "</td>" +
                        "<td>" + data[i].SLDD + "</td>" +
                        "<td>" + data[i].SLUT + "</td>" +
                        "<td>" + data[i].trangThai + "</td>" +
                        "<td>" + data[i].ngayKetthuc + "</td>" +
                        "<td>" + " " + "</td>" +
                        "<td>" +
                        '<img class="actionIcon" src="https://cdn-icons-png.flaticon.com/512/262/262038.png" onclick="editEQLTT_ketthuc(' + data[i].id + ')" alt="edit" srcset=" ">' +
                        "</td>" +
                        "</tr>";
                }
                console.log(strResultQLTT_ketthuc);
                $("#tblActQLTT_ketthuc tbody").append(strResultQLTT_ketthuc);
            }
        }
    );
}



//Edit Function
function editEQLTT_ketthuc(id){
    $(".something-1").show();
    
    for (var i = 0; i < arrEleQLTT_ketthuc.length; i++) {
        if (arrEleQLTT_ketthuc[i].id == id) {
            $("#txtId").val(arrEleQLTT_ketthuc[i].id);
            $("#tenMuavuEdit").val(arrEleQLTT_ketthuc[i].tenMuavu);
            $("#SLDDEdit").val(arrEleQLTT_ketthuc[i].SLDD);
            $("#ngayKetthucEdit").val(arrEleQLTT_ketthuc[i].ngayKetthuc);
            $("#trangThaiEdit2").val(arrEleQLTT_ketthuc[i].trangThai);
            break;
        }
    }
    loadDataQLTT_ketthuc();
}

$("#btnModalAddQLTT_ketthuc").click(function(){
    var dataUpdate = {};
    dataUpdate.tenMuavu = $("#tenMuavuEdit").val();
    dataUpdate.SLDD = $("#SLDDEdit").val();
    dataUpdate.ngayKetthuc = $("#ngayKetthucEdit").val();
    dataUpdate.trangThai = $("#trangThaiEdit2").val();
    var id = $("#txtId").val();
    console.log(dataUpdate);

    $.ajax({
        url: "https://62b47b4c530b26da4cbf9d4f.mockapi.io/QuanLyTrangTrai/" + id,
        type: "PUT",
        data: dataUpdate,
        success: function () {
            //dong form
            $(".something-1").css("display", "none");
            loadDataQLTT_ketthuc();
        }
    })
});
$(".close-something-1").click(function(){
    $(".something-1").hide();
})
$("#btnModalCancelQLTT_ketthuc").click(function(){
    $(".something-1").hide();
})
