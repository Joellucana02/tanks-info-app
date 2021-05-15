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
        displayTanks(getData, $tankNameContainer);

        addClasses();

    } catch (error) {
        console.log(error)
    } finally {
        console.log('Its good to be alive')
    }
}
let $tankNameContainer = d.createElement('div');
let displayTanks = (api, tnc) => {

    let results = api.results;
    results.forEach(element => {
        tnc.classList.add('tank-name-container');
        $tankName.classList.add('tank-info-btn');
        $tankName.textContent = element.nametank;
        tnc.appendChild($tankName);
        $tank.appendChild(tnc);
        let $clone = d.importNode($tank, true);
        $fragment.appendChild($clone);
        //console.log($tankNameContainer)
    })
    $main.appendChild($fragment);
}
d.addEventListener('DOMContentLoaded', requestData);

let addClasses = (e) => {
    let $tankNameContainerAll = d.querySelectorAll('.tank-name-container');
    console.log($tankNameContainerAll);
    //let $tankInfoBtn = d.querySelectorAll('.tank-info-btn');

    /* console.log(typeof ($tankInfoBtn)) */
    let $tankNameContainerArr = Array.from($tankNameContainerAll);
    console.log($tankNameContainerArr.length);
    for (var i = 0; i < $tankNameContainerArr.length; i++) {
        $tankNameContainerArr[i].addEventListener("click", () => {
            //li[i].classList.toggle("done");
            console.log('someone hit me');
        })
    }
    /* $tankNameContainerArr.forEach(element => {
        element.addEventListner('click', () => {
            console.log('someone hit me');
        });
    }); */

}
