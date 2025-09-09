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


    document.getElementById("subMenu-btn").addEventListener("click", function () {
        document.querySelector(".sidebar-subMenu").classList.toggle("open");

        if (!document.querySelector(".sidebar-subMenu").classList.contains("open")) {
        // Remove active class from all items
        document.querySelectorAll(".sidebar-subMenu-listItem").forEach((item) => {
            item.classList.remove("active");
        });

        document.querySelectorAll(".sidebar-subMenu-Sublist").forEach((sublist) => {
            sublist.style.display = "none";
        });
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
            } else if (title === "Tasks") {
            document.querySelector(".tasks-submenu").classList.add("active");
            }
        });
    });
});