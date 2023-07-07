const collapsible = document.querySelectorAll(".collaps");
collapsible.forEach((item) =>
    item.addEventListener("click", function () { 
        this.classList.toggle('collaps--expanded');
     })
);
