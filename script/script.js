$(function () {

    $("#allAgreeChk").click(function () {

        /* 전체동의 버튼 선택 / 해제 */
        var chk = $(this).prop("checked");

        if (chk == true) {
            $(".check").prop("checked", "true");
        } else if (chk == false) {
            document.getElementById("chk1").checked = false;
            document.getElementById("chk2").checked = false;
            document.getElementById("chk3").checked = false;
            document.getElementById("chk4").checked = false;
        }
        /* 전체동의 버튼 선택 / 해제 */


        $(".check").click(function () {

            var chk1 = $("#chk1").prop("checked");
            var chk2 = $("#chk2").prop("checked");
            var chk3 = $("#chk3").prop("checked");
            var chk4 = $("#chk4").prop("checked");

            if (chk1 && chk2 && chk3 && chk4 == true) {
                $("#allAgreeChk").prop("checked", "true");
            } else {
                document.getElementById("allAgreeChk").checked = false;
            }


        });
    });





});

/*
 $("input.allAgreeChk").click(function() {
    $("input.check").attr("checked","true");
});*/
