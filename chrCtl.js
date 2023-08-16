document.addEventListener("DOMContentLoaded",
    function(e) {
        let button = document.querySelector("input")
        let p = document.querySelector("p")

        button.addEventListener("click",
            function(e) {
                alert(p.textContent)
            }
        )
    }
)