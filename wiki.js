
document.body.insertAdjacentHTML("afterbegin", `
    <div id='header' class='wrapper'>
        <img src='${getRootPath()}banner.png' class='banner-image'/>
    </div>
`);
document.body.insertAdjacentHTML("beforeend", `
    <div id='footer' class='wrapper'>Footer</div>
`);

function getRootPath() {
    return window.location.href.endsWith('index.html') ? './' : '../'
}