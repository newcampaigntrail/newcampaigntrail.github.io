const overlay = document.getElementById('overlay_scr');
const customTab = document.getElementById('customTab');
const normalTab = document.getElementById('normalTab');
const customContent = document.getElementById('customContent');
const normalContent = document.getElementById('normalContent');

overlay.style.display = 'block';

const viewNormal = () => {
  normalTab.classList.add('active');
  customTab.classList.remove('active');
  normalContent.style.display = 'block';
  customContent.style.display = 'none';
};
const viewCustom = () => {
  customTab.classList.add('active');
  normalTab.classList.remove('active');
  customContent.style.display = 'block';
  normalContent.style.display = 'none';
};

// Switch tabs
customTab.addEventListener('click', viewCustom);

normalTab.addEventListener('click', viewNormal);

viewNormal();



var selectElement = document.getElementById("modSelect");

const add_favourite = (val) => {
    let favs = window.localStorage.getItem("favourites");
    favs = favs ?? "[]";
    favs = JSON.parse(favs);

    favs.push(val);

    favs = JSON.stringify(favs);
    window.localStorage.setItem("favourites", favs);

    let id = id_clean(`#favourite_${val}_button`);

    console.log()

    $(id).html("<font color='white'>Favourited</font>");

    let n = $(id_clean(`#${val}_select_option`))[0]
    if (n) {
        n.setAttribute("data-tags", n.getAttribute("data-tags") + " favourite")
    }

    reconstruct();
}

const remove_favourite = (val) => {
    let favs = window.localStorage.getItem("favourites");
    favs = favs ?? "[]";
    favs = JSON.parse(favs);

    const index = favs.indexOf(val);
    if (index > -1) {
        favs.splice(index, 1);
    }

    favs = JSON.stringify(favs);
    window.localStorage.setItem("favourites", favs);

    let id = id_clean(`#favourite_${val}_button`);

    $(id).html("Favourite");

    let n = $(id_clean(`#${val}_select_option`))[0];
    if (n) {
        let z = "";
        n.getAttribute("data-tags").split(" ").forEach(f => {
            if (f !== "favourite") z += f + " ";
        });
        z = z.trim();
        n.setAttribute("data-tags", z);
    }

    reconstruct();
}


const check_favourite = (val) => {
    let favs = window.localStorage.getItem("favourites");
    favs = favs ?? "[]";
    favs = JSON.parse(favs);

    return favs.includes(val);
}

const toggle_fav = (val) => {
    if (check_favourite(val)) {
        remove_favourite(val);
    } else add_favourite(val);
}

var id_clean = (id) => {
    id = id.replaceAll(" ", "_").replaceAll("!", "-");
    return id;
}

const reconstruct = () => {
    let selection = $(`<select name="mod" id="modSelect222" onchange="modSelectChange()"></select>`);
    for (var i = 0; i < options.length; i++) {
        let opt = options[i];

        var option = document.createElement("option");
        option.value = opt.value;
        option.innerHTML = opt.label;
        option.id = id_clean(`${opt.value}_select_option`);
        
        if (opt["tags"]) {
            option.setAttribute("data-tags", opt["tags"].join(" "));
        }
        if (opt.style) {
            option.setAttribute("style", opt.style);
        }
                
        const fav = check_favourite(opt.value) ? "<font color='white'>Favourited</font>" : "Favourite";

        if (check_favourite(opt.value)) {
            option.setAttribute("data-tags", option.getAttribute("data-tags") + " favourite")
        }
        selection.append(option);
    }

    document.body.appendChild(selection[0]);

    originalOptions = $("#modSelect222 option").clone();

    $("#modSelect222").remove();
}

function loadSync(path) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, false);
    xhr.send();

    if (xhr.status === 200) {
        try {
            const response = JSON.parse(xhr.responseText.trim());
            return response;
        } catch (error) {
            throw new Error('Error parsing JSON: ' + error.message);
        }
    } else {
        throw new Error('Request failed: ' + xhr.statusText);
    }
}

let options;

try {
    options = loadSync("/static/json/mods.json");
} catch (error) {
    console.error('Error:', error);
}


for (var i = 0; i < options.length; i++) {

    let opt = options[i];

    // dropdown option

    var option = document.createElement("option");
    option.value = opt.value;
    option.innerHTML = opt.label;
    option.id = id_clean(`${opt.value}_select_option`);
    
    if (opt["tags"]) {
        option.setAttribute("data-tags", opt["tags"].join(" "));
    }
    if (opt.style) {
        option.setAttribute("style", opt.style);
    }
    
    // normal screen option

    var widget = document.createElement("div");
    widget.classList.add("widget");
    widget.setAttribute("mod-value", opt.value);
    
    if (opt.style) {
        widget.setAttribute("style", opt.style);
        widget.style.border = "solid 2px";
    }
    
    const fav = check_favourite(opt.value) ? "<font color='white'>Favourited</font>" : "Favourite";

    if (check_favourite(opt.value)) {
        option.setAttribute("data-tags", option.getAttribute("data-tags") + " favourite")
    }

    let id = id_clean(`favourite_${opt.value}_button`);

    widget.innerHTML = `
        <img src='${opt.image ?? "/static/mod_icons/default_placeholder.png"}' class='widget_image'></img>
        <br>
        <h3>${opt.label}</h3>
        <span>Tags: ${opt.tags.join(", ")}</span><br>
        <button class="select-button" onclick="$('#modSelect').val('${opt.value}');selection_click()">Select</button>
        <button id='${id}' class="favourite-button" onclick="toggle_fav('${opt.value}')">${fav}</button>
    `;

    var widgetsContainer = document.getElementById("widgetsContainer");

    widgetsContainer.appendChild(widget);
    selectElement.appendChild(option);
}

$("#mod_loader_overlay_block").click(()=>{
    $("#modLoadReveal").click();
    changeFavicon("/static/34starcircle-2.png");
    document.body.style.overflow = '';
});

$("#customMenu").change(()=>{
    let cached = {
        code_one: $("#codeset1").val(),
        code_two: $("#codeset2").val(),
        ending_code: $("#codeset3").val()
    }
    window.localStorage.setItem("mod_loader_cache", JSON.stringify(cached));
})

$("#submitMod").click(function() {

    document.body.style.overflow = '';
    if ($("#importfile")[0].value != "") {
        const content = document.querySelector('.content');
        const [file] = document.querySelector('input[type=file]').files;
        const reader = new FileReader();

        reader.onload = function(fle) {
            importedtext = fle.target.result
            importedtext = encode(importedtext)
            importedtext = atob(importedtext)
            campaignTrail_temp.dagakotowaru = importedtext
        }
        reader.readAsText(file);
    }
    if ($("#modSelect")[0].value == "other") {
        important_info = $("#codeset3")[0].value;
        if (important_info != "") {
            campaignTrail_temp.multiple_endings = true
        }
        if (!moddercheckeror) {
            evaluate($("#codeset1")[0].value)
            moddercheckeror = true
        }
    } else {
        var client = new XMLHttpRequest();
        client.open('GET', "../static/mods/" + $("#modSelect")[0].value + "_init.html");
        client.onreadystatechange = function() {
            evaluate(client.responseText)
        }
        client.send();
        diff_mod = true
    }
    $("#modloaddiv")[0].style.display = 'none'
    $("#modLoadReveal")[0].style.display = 'none'
    modded = true
})

$('.tagCheckbox').on('change', ()=>{filterEntries();selection_click()});

let selection_click = () => {
    let widget = Array.from(document.getElementsByClassName("widget")).find(f=>f.getAttribute("mod-value")===$("#modSelect").val());
    let widgets = Array.from(document.getElementsByClassName("widget"));

    let icon = options.find(f=>f.value === $("#modSelect").val()).image;
    if (icon) {
        changeFavicon(icon);
    } else {
        changeFavicon("/static/34starcircle-2.png");
    }

    widgets.forEach(f => f.classList.remove("selected_widget"));
    widget.classList.add("selected_widget");

}

$("#modSelect").change(selection_click);

selection_click();

const rebuild_custom_loader = () => {
    $("#custom_loader_area").html("");

    let new_selector = document.createElement("select");
    new_selector.id = "custom_select";

    let custom = window.localStorage.getItem("custom_loader") ?? "[]";
    custom = JSON.parse(custom);

    let null_opt = document.createElement("option");
    null_opt.innerHTML = "Other";
    null_opt.value = null;

    new_selector.appendChild(null_opt);

    for (let i in custom) {
        let cu = custom[i];
        let option = document.createElement("option");
        option.innerHTML = cu.name;
        option.value = cu.name;

        new_selector.appendChild(option);
    }

    $("#custom_loader_area")[0].appendChild(new_selector);

    new_selector.addEventListener("change", (e) => {
        e.preventDefault();
        let selection = new_selector.value;

        let custom = window.localStorage.getItem("custom_loader") ?? "[]";
        custom = JSON.parse(custom);

        let selec = custom.find(f=>f.name==selection);

        $("#codeset1").val(selec.code_one);
        $("#codeset2").val(selec.code_two);
        $("#codeset3").val(selec.ending_code);

        $("#custom_loader_delete")[0].style.display = "";
    })
}

$("#custom_loader_save").click(() => {
    let name = $("#custom_loader_input").val();
    let custom = window.localStorage.getItem("custom_loader") ?? "[]";
    custom = JSON.parse(custom);

    custom.push({
        name: name,
        code_one: $("#codeset1").val(),
        code_two: $("#codeset2").val(),
        ending_code: $("#codeset3").val()
    })

    window.localStorage.setItem("custom_loader", JSON.stringify(custom));

    rebuild_custom_loader();

    $("#custom_loader_delete")[0].style.display = "";
})

rebuild_custom_loader();

$("#custom_loader_delete").click(f=>{
    let selection = $("#custom_select").val();

    let custom = window.localStorage.getItem("custom_loader") ?? "[]";
    custom = JSON.parse(custom);

    let selec = custom.filter(f=>f.name!==selection);

    window.localStorage.setItem("custom_loader", JSON.stringify(selec));

    rebuild_custom_loader();

})

let cache = window.localStorage.getItem("mod_loader_cache");
if (cache) {
    window.localStorage.removeItem("mod_loader_cache");
    let cached = JSON.parse(cache);
    $("#codeset1").val(cached.code_one);
    $("#codeset2").val(cached.code_two);
    $("#codeset3").val(cached.ending_code);
}

// very important 2000n stuff

const normals = ["2000N", "2000 Redux", "2000?", "2000 Normal", "Normalverse 2000", "Where am I?", "Don't think about 1993", "Normal", "2000N?", "2000"]
let normal_mode = 0

let normal_adjust = () => {
    let normal = Array.from(document.getElementsByClassName("widget")).find(f=>f.getAttribute("mod-value")==="2000N");
    if (!normal) {
        return;
    }
    normal.children[2].style = `overflow: hidden;white-space: nowrap;text-overflow: clip;`
    normal.children[2].innerHTML = `${normals[normal_mode]}`
    normal_mode = (normal_mode + 1) % normals.length

    if ($(".campaign_trail_start_emphasis").length > 0) {
        window.setTimeout(normal_adjust, Math.floor(Math.random()*500));
    }
}

normal_adjust();

$("#sort").change(e=>{
    options.reverse();
    const widgetsContainer = document.getElementById("widgetsContainer");
    const widgetElements = Array.from(widgetsContainer.getElementsByClassName("widget"));
    widgetElements.reverse();
    widgetsContainer.innerHTML = '';

    for (const widget of widgetElements) {
        widgetsContainer.appendChild(widget);
    }

    const selectElement = document.getElementById("modSelect");
    selectElement.innerHTML = '';

    for (const opt of options) {
        const option = document.createElement("option");
        option.value = opt.value;
        option.innerHTML = opt.label;
        option.id = id_clean(`${opt.value}_select_option`);
        if (opt["tags"]) {
            option.setAttribute("data-tags", opt["tags"].join(" "));
        }
        if (opt.style) {
            option.setAttribute("style", opt.style);
        }

        if (check_favourite(opt.value)) {
            option.setAttribute("data-tags", option.getAttribute("data-tags") + " favourite")
        }
        selectElement.appendChild(option); // Append options in reversed order
    }

    reconstruct();
    filterEntries();
    selection_click();
});

let fullscreen = false;

$("#fullscreen_toggle").click((e) => {
    e.preventDefault();
    if (fullscreen) {
        fullscreen = false;
        $("#fullscreen_toggle")[0].classList.remove("down");
        $(".overlay_scr")[0].classList.remove("fullscreen");

        return;
    }
    fullscreen = true;
    $("#fullscreen_toggle")[0].classList.add("down");
    $(".overlay_scr")[0].classList.add("fullscreen");

})

nct_stuff.name_filter = "";

document.getElementById("searchInput").addEventListener("keyup", () => {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    
    nct_stuff.name_filter = searchInput;

    filterEntries();
});