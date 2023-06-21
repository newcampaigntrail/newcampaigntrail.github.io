// This is code that checks the URL parameters of the URL and if a mod parameter
// exists then we just load that mod automatically.
// This makes it easier to link mods and to fast reload!

// We set delay of 500ms because the mod population code needs to execute first
// Kind of janky but it works consistently
setTimeout(() => {
    const urlParams = new URL(window.location.toLocaleString()).searchParams;
    const mod = urlParams.get('mod');

    if(mod != null) {
        console.log(`Detected mod url parameter, trying to load mod with name "${mod}"`);
        // Click the mod loader button
        document.getElementById("modLoadReveal").click();

        const modSelector = document.getElementById("modSelect");

        // Set picker value
        modSelector.value = mod;
        modSelector.dispatchEvent(new Event('change'));

        if(modSelector.value == '') {
            console.log(`Error: Could not find mod in picker with value "${mod}". Please check your url and try again.`);
            modSelector.value = "other";
            return;
        }

        // Click submit button
        document.getElementById("submitMod").click();
}
}, 250);
