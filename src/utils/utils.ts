const scrollToView = (refName: string) => {
    const element = document.getElementById(refName)
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
}

const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
}

export { scrollToView, scrollTop };
