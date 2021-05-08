const d = document;
let $main = d.querySelector('.main-container'),
    $tank = d.querySelector('.tank'),
    $btn = d.querySelector('.tank-btn'),
    $tankName = d.querySelector('.tank-name'),
    $fragment = d.createDocumentFragment();
let myApi = 'https://tanksapirunningjs.herokuapp.com/finally';
let head = {
    headers: {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }
}
let requestData = async (link) => {
    try {
        let getResponse = await axios.get(myApi, head);
        let getData = await getResponse.data;
        console.log(getData);
        displayTanks(getData);
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Its good to be alive')
    }
}
let displayTanks = (api) => {
    //console.log(api.results.length);
    let results = api.results;
    results.forEach(element => {
        //console.log(element.nametank);
        //$tankName.textContent = element.nametank;

        $tankName.textContent = element.nametank;
        $tankName.classList.add('tank-info-btn');
        $tank.appendChild($tankName);
        let $clone = d.importNode($tank, true);
        $fragment.appendChild($clone);
    })
    $main.appendChild($fragment);
}
d.addEventListener('DOMContentLoaded', requestData);
/* $tankName = d.querySelectorAll('.tank-name'); */
$tankName.addEventListener('click', (e) => {
    if (e.target.matches('.tank-name')) {
        console.log($tankName)
        /* let $infoContainer = d.createElement('div');
        $infoContainer.classList.add('tank-info-container'); */
        /* console.log($infoContainer); */

        console.log('Its working');
    } else {

        console.log('................................')
    }
    /* let $tankBtn = d.querySelector('.tank-info-btn');
    console.log($tankBtn) */

    /* let $divRandom = d.createElement('div');
    $divRandom.classList.add('tank-info-container'); */


})