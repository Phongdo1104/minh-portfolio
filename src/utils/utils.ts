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

export { scrollToView, scrollTop, scrollTopSmooth };
