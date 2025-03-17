const scrollToView = (refName: string) => {
    const element = document.getElementById(refName)
    element?.scrollIntoView({ behavior: "smooth" });
}

const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
}

const scrollTopSmooth = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}

export { scrollToView, scrollTop, scrollTopSmooth };
