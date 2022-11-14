const imgMap = {
    "html-intro" : 'como-crear-una-pagina-web.jpg',
    "mental-maps" : 'mapas-mentales-desde-cero.jpg',
    "meli-intro" : 'mercadolibre-desde-cero-a-experto.jpg',
    "learn-it" : 'aprendetelo.jpg',
    "leadership" : 'liderazgo-101.jpg',
    "virtual-dev-show" : 'virtual-dev-show.png',
    "ciberseguridad" : 'cibreseguridad-en-el-trabajo.png',
    "perote" : 'congreso-perote.png'
};

let modal = document.getElementById('myModal');

let imgModal = document.getElementById('img');

let allItems = document.querySelectorAll('.portfolio-item');

allItems.forEach(item => {
    item.addEventListener('click', function() {
        let id = this.getAttribute("id");
        let imgName = imgMap[id];
        let path = './assets/img/Docs/'+imgName;
        modal.style.display='block';
        imgModal.src = path;
    })
});

let imgClose = document.getElementsByClassName('img-close')[0];

imgClose.onclick = ()=> modal.style.display = 'none';
