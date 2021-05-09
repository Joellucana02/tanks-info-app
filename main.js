const d = document;
let $main = d.querySelector('.main-container'),
    $tank = d.querySelector('.tank'),
    /* $btn = d.querySelector('.tank-btn'), */
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
        addClasses();
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Its good to be alive')
    }
}
let displayTanks = (api) => {

    let results = api.results;
    results.forEach(element => {
        $tankName.textContent = element.nametank;
        $tankName.classList.add('tank-info-btn');
        $tank.appendChild($tankName);
        let $clone = d.importNode($tank, true);
        $fragment.appendChild($clone);
    })
    $main.appendChild($fragment);
}
d.addEventListener('DOMContentLoaded', requestData);
let addClasses = () => {
    let $tankInfoBtn = d.querySelectorAll('.tank-info-btn');

    console.log(typeof ($tankInfoBtn))
    let $tankInfoArr = Array.from($tankInfoBtn);
    console.log($tankInfoArr.length);

    $tankInfoArr.forEach(element => {
        element.addEventListner('click', () => {
            console.log('someone hit me');
        });
    });
}
