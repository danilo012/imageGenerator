const btn = document.getElementById("img-generator");
const download_btn = document.getElementById("download-btn");

let images = [];
let imgUrl;

function newImage() {
    const img = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${img.download_url}')`;
    // console.log(typeof (img.url))
    imgUrl = img.url;


}
async function getImage() {
    const apiUrl = 'https://picsum.photos/v2/list?page=2&limit=100';
    try {
        const response = await fetch(apiUrl);
        images = await response.json();
        console.log(images)
        newImage();
    } catch (error) {

    }
}

function downloadImg() {
    const donwloadUrl = imgUrl;
    window.open(donwloadUrl, '_blank');
}

btn.addEventListener('click', newImage);
download_btn.addEventListener('click', downloadImg);

getImage();