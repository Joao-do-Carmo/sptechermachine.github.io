function converter10() {
    var num10 = Number(ipt_num10.value);
    var num2 = num10.toString(2);
    var num8 = num10.toString(8);
    var num16 = num10.toString(16);

    document.getElementById("ipt_num2").value = num2;
    document.getElementById("ipt_num8").value = num8;
    document.getElementById("ipt_num16").value = num16;
    if (num10 == '') {
        document.getElementById("ipt_num2").value = '';
        document.getElementById("ipt_num8").value = '';
        document.getElementById("ipt_num16").value = '';
    }
}

function converter2() {
    var num2 = ipt_num2.value;
    var num10 = parseInt(num2, 2);
    var num8 = num10.toString(8);
    var num16 = num10.toString(16);

    document.getElementById("ipt_num10").value = num10;
    document.getElementById("ipt_num8").value = num8;
    document.getElementById("ipt_num16").value = num16;
    if (num2 == '') {
        document.getElementById("ipt_num10").value = '';
        document.getElementById("ipt_num8").value = '';
        document.getElementById("ipt_num16").value = '';
    }
}

function converter8() {
    var num8 = ipt_num8.value;
    var num10 = parseInt(num8, 8);
    var num2 = num10.toString(2);
    var num16 = num10.toString(16);

    document.getElementById("ipt_num2").value = num2;
    document.getElementById("ipt_num10").value = num10;
    document.getElementById("ipt_num16").value = num16;
    if (num8 == '') {
        document.getElementById("ipt_num2").value = '';
        document.getElementById("ipt_num10").value = '';
        document.getElementById("ipt_num16").value = '';
    }
}

function converter16() {
    var num16 = ipt_num16.value;
    var num10 = parseInt(num16, 16);
    var num2 = num10.toString(2);
    var num8 = num10.toString(8);

    document.getElementById("ipt_num2").value = num2;
    document.getElementById("ipt_num8").value = num8;
    document.getElementById("ipt_num10").value = num10;
    if (num16 == '') {
        document.getElementById("ipt_num2").value = '';
        document.getElementById("ipt_num8").value = '';
        document.getElementById("ipt_num10").value = '';
    }
}