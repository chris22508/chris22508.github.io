document.getElementById("moveButton").addEventListener("mouseover", function() {
    let newX = Math.random() * (window.innerWidth - this.offsetWidth);
    let newY = Math.random() * (window.innerHeight - this.offsetHeight);

    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;
});
