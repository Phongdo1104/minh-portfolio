const scrollToView = (refName: string, smoothness: boolean = true) => {
    const element = document.getElementById(refName)

    if (smoothness) {
        element?.scrollIntoView({ behavior: "smooth" });
    } else {
        element?.scrollIntoView({ behavior: "instant" });
    }
}

const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
}

const scrollTopSmooth = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}

function closeSideBar() {
    const sidebar = document.getElementById('sidebar-block');
    if (!sidebar) {
        return;
    }

    sidebar.style.width = "0";
    sidebar.style.opacity = "0";

    const menuBurger = document.getElementById('MenuBurger');
    if (!menuBurger) {
        return;
    }
    menuBurger.classList.remove('menu-burger-in');
    menuBurger.classList.add('menu-burger-out');
}

export { scrollToView, scrollTop, scrollTopSmooth, closeSideBar };
