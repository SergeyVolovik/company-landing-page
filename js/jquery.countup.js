! function (t) {
    "use strict";
    t.fn.countUp = function (e) {
        var a = t.extend({
            time: 2e3,
            delay: 10
        }, e);
        return this.each(function () {
            var e = t(this),
                n = a,
                u = function () {
                    e.data("counterupTo") || e.data("counterupTo", e.text());
                    var t = parseInt(e.data("counter-time")) > 0 ? parseInt(e.data("counter-time")) : n.time,
                        a = parseInt(e.data("counter-delay")) > 0 ? parseInt(e.data("counter-delay")) : n.delay,
                        u = t / a,
                        r = e.data("counterupTo"),
                        o = [r],
                        c = /[0-9]+,[0-9]+/.test(r);
                    r = r.replace(/,/g, "");
                    for (var d = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)), s = d ? (r.split(".")[1] || []).length : 0, p = u; p >= 1; p--) {
                        var i = parseInt(Math.round(r / u * p));
                        if (d && (i = parseFloat(r / u * p).toFixed(s)), c)
                            for (;
                                /(\d+)(\d{3})/.test(i.toString());) i = i.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        o.unshift(i)
                    }
                    e.data("counterup-nums", o), e.text("0");
                    var f = function () {
                        e.data("counterup-nums") && (e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), e.delay) : (e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null)))
                    };
                    e.data("counterup-func", f), setTimeout(e.data("counterup-func"), a)
                };
            e.waypoint(u, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);