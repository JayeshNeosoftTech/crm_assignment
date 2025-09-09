document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".sidebar-subMenu-listItem");

    dropdownButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
        const sublist = this.closest("li").querySelector(".sidebar-subMenu-Sublist");

        this.classList.toggle("active");

        if (sublist.style.display === "block") {
            sublist.style.display = "none";
        } else {
            sublist.style.display = "block";
        }
        });
    });

    document.querySelector(".searchbar-box").setAttribute("disabled", "disabled");

    document.getElementById("subMenu-btn").addEventListener("click", function () {
        document.querySelector(".sidebar-subMenu").classList.toggle("open");

        if (!document.querySelector(".sidebar-subMenu").classList.contains("open")) {
            document.querySelectorAll(".sidebar-subMenu-listItem").forEach((item) => {
                item.classList.remove("active");
            });

            document.querySelectorAll(".sidebar-subMenu-Sublist").forEach((sublist) => {
                sublist.style.display = "none";
            });

            document.querySelector(".searchbar-box").setAttribute("disabled", "disabled");
        }
        else{
            document.querySelector(".searchbar-box").removeAttribute("disabled");
        }
    });


    document.querySelectorAll(".mainMenu-listItem").forEach(item => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".mainMenu-listItem").forEach(el => {
            el.classList.remove("active");
            });

            document.querySelectorAll(".sidebar-subMenu-listWrp").forEach(el => {
            el.classList.remove("active");
            });

            this.classList.add("active");

            const title = this.getAttribute("title");
            document.querySelector(".sidebar-subMenu-title").textContent = title;

            if (title === "Dashboard") {
                document.querySelector(".dashboard-submenu").classList.add("active");
            } 

            else if (title === "Tasks") {
                document.querySelector(".tasks-submenu").classList.add("active");
            }

            else if (title === "Setting") {
                document.querySelector(".setting-submenu").classList.add("active");
            }

        });
    });


    const toggleSwitch = document.getElementById("themeToggle");

    toggleSwitch.addEventListener("change", function () {
        document.body.classList.toggle("dark", this.checked);

        if(document.body.classList.contains("dark")){
            document.querySelector(".logo").setAttribute("src", "./assets/img/recruitCRM_logo.svg");
        }
        else{
            document.querySelector(".logo").setAttribute("src", "./assets/img/recruitCRM_logo_blue.svg");
        }
    });
});