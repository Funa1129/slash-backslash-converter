function convert() {
    var input = document.getElementById("input").value;
    var conversionType = document.querySelector('input[name="conversion"]:checked').value;
    var output;

    if (conversionType === "toSlash") {
        output = input.replace(/\\/g, "/");
    } else {
        output = input.replace(/\//g, "\\");
    }

    document.getElementById("output").value = output;
}

function selectText1() {
    var input = document.getElementById("input");
    input.select();
    input.setSelectionRange(0, 9999);
}

function selectText2() {
    var output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 9999);
}