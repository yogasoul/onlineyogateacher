document.querySelector("form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("input").value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    alert("Thanks! Email capture will be connected soon.");

    this.reset();
});
