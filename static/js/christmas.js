var christmasSetup = () => {
    let christmasToggle = document.createElement("button")
    
    if (nct_stuff.christmas) {
        christmasToggle.innerHTML = "Disable Christmas"
        christmasToggle.onclick = function() {
            window.localStorage.setItem("christmas", 0)
            window.location.reload()
        }
    } else {
        christmasToggle.innerHTML = "Enable Christmas"
        christmasToggle.onclick = function() {
            window.localStorage.setItem("christmas", 1)
            window.location.reload()
        }
    }
    christmasToggle.style = `position:fixed;left:10px;bottom:10px`
    christmasToggle.id = "christmasToggler"
    document.body.appendChild(christmasToggle)


    var theGrinch = window.setInterval(function() {
    if (document.getElementById("inner_window_1")) {
        return false;
    }
    let toggler = document.getElementById("christmasToggler")
    toggler.remove()
    window.clearInterval(theGrinch)
    },100)
}