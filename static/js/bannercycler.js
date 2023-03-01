bannerArr=0
bannerlist=["PUT A LIST OF URLS OF BANNERS HERE"]
var changeBanner = () =>
{
console.log("functrig")
bannerArr+=1
document.getElementById("header").src=bannerlist[bannerArr % bannerlist.length]
}
document.getElementById("header").src=bannerlist[0]
console.log("bannerset")
footer = $(".footer")[0]
var button = document.createElement("button") // <button onclick="changeBanner()" style="font-weight: bold; height:19.49px; position: static; right: 770px; top: 0px;">Change banner</button>
button.style = `font-weight: bold; height:19.49px; position: static; right: 770px; top: 0px;`
button.innerHTML = "Change banner"
footer.insertBefore(button, footer.firstChild);
button.onclick = changeBanner;