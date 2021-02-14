console.log("MAIN.js");


loadScript(["mod1.js", "mod2.js"], () => {
    console.log("modules loaded")
});
