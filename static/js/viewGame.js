function modSelectChange() {
    if ($("#modSelect")[0].value == "other") {
        $("#customMenu")[0].style.display = "block"
        $("#copyLink")[0].style.display = "none"
    } else {
        $("#customMenu")[0].style.display = "none"
        $("#copyLink")[0].style.display = "block"
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