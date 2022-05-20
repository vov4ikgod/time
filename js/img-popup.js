const fileInputResult = document.querySelector('.file-input-result');

function download(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function() {
        let img = document.createElement('img');
        fileInputResult.appendChild(img); 
        img.src = reader.result;
        img.classList.add('file-input-result-img');
    }
};
