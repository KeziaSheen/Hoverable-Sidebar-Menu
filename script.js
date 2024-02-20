//Sidebar and buttons

const sidebar = document.querySelector(".sidebar");
const sidebarOpen = document.querySelector("#sidebar_open");
const sidebarClose = document.querySelector("#sidebar_close");
const sidebarLock = document.querySelector("#lock_icon");

//Function to toggle the sidebar
const toggleLock = () => {
    sidebar.classList.toggle("locked");

    //When sidebar is not locked
    if(!sidebar.classList.contains("locked")){
        sidebar.classList.add("hoverable");
        sidebarLock.classList.replace("bx-lock-alt","bx-lock-open");
    }
    else{
        sidebar.classList.remove("hoverable");
        sidebarLock.classList.replace("bx-lock-open","bx-lock-alt");
    }

};

//Function to hide sidebar when mouse leaves
const hideSidebar = () => {
    if(sidebar.classList.contains("hoverable")){
        sidebar.classList.add("close");
    }
}

//Function to show sidebar when mouse enters
const showSidebar = () => {
    if(sidebar.classList.contains("hoverable")){
        sidebar.classList.remove("close");
    }
}


//Event listerners
sidebarLock.addEventListener('click', toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);