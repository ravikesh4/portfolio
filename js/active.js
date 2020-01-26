
try {
            var as = document.querySelectorAll(".uk-panel a");
            for (var i = 0; i < as.length; i++) {
                var link = as[i].getAttribute("href");
                if (link === "{{ request.path }}") {
                    as[i].parentElement.classList.add("uk-active");
                    if (parent.classList.contains("uk-parent")) {
                        parent.classList.add("uk-open");
                    }
                    }
                }
            } catch (e) {

        }


console.log(window.location.pathname);
try {
    var as = document.querySelectorAll(".uk-panel a");
    for (var i = 0; i < as.length; i++) {
        var link = as[i].getAttribute("href");
        if ("/"+link === window.location.pathname) {
            as[i].parentElement.classList.add("uk-active");
        }

    }
} catch (e) {

}
      