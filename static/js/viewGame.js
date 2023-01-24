function modSelectChange() {
    if ($("#modSelect")[0].value == "other") {
        $("#customMenu")[0].style.display = "block"
    } else {
        $("#customMenu")[0].style.display = "none"
    }
}

document.getElementById("submitMod").addEventListener("click", function() {
    if ($("#modSelect")[0].value == "other") {
        if (!moddercheckeror) {
            eval($("#codeset1")[0].value)
            moddercheckeror = true
        }
    } else {
        var client = new XMLHttpRequest();
        client.open('GET', "../static/mods/" + $("#modSelect")[0].value + "_init.html");
        client.onreadystatechange = function() {
            eval(client.responseText)
        }
        client.send();
        diff_mod = true
    }
    $("#modloaddiv")[0].style.display = 'none'
    $("#modLoadReveal")[0].style.display = 'none'
    modded = true
})