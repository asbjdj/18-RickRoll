document.addEventListener("visibilitychange", function () {
   if (document.visibilityState === "hidden")
       document.title = "别走啊w(ﾟДﾟ)w";
    else if (document.visibilityState === "visible")
       document.title = "你回来了ヽ(✿ﾟ▽ﾟ)ノ";
});