document.getElementById("qeneratebtn").addEventListener("click", (event) => {
    event.preventDefault();

    const inputText = document.getElementById("qrcode-text").value;
    const qrCodeImage = document.getElementById("qrcode-img");

    if (inputText) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(inputText)}`;
        qrCodeImage.src = url;
    } else {
        alert("Please enter text or URL.");
    }
});



