function displayShowreelVideo(elementStr: any) {
    const videoElement = document.getElementById(elementStr);
    if (!videoElement) return;

    videoElement.style.opacity = '1';
    videoElement.style.pointerEvents = 'auto';
}

export { displayShowreelVideo }