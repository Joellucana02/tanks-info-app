const d = document;
let $main = d.querySelector('.main-container'),
    $tank = d.querySelector('.tank'),

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
        let getResponse = await axios.get(myApi, head),
            getData = await getResponse.data;
        console.log(getData);
        displayTanks(getData, $tankNameContainer);

        addClasses();

    } catch (error) {
        console.log(error)
    } finally {
        console.log('Its good to be alive')
    }
}
let $popUpTankInfo = d.querySelector('.tank-info-popup'),
    $popUpTankInfoOverlay = d.querySelector('.overlay'),
    $popUpClose = d.querySelector('.close-btn'),
    $tankNameContainer = d.createElement('div');

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

    })
    $main.appendChild($fragment);
}
d.addEventListener('DOMContentLoaded', requestData);

let addClasses = () => {
    let $tankNameContainerAll = d.querySelectorAll('.tank-name-container');
    console.log($tankNameContainerAll);

    let $tankNameContainerArr = Array.from($tankNameContainerAll);
    console.log($tankNameContainerArr.length);
    for (let i = 0; i < $tankNameContainerArr.length; i++) {
        $tankNameContainerArr[i].addEventListener("click", () => {

            console.log($tankNameContainerArr[i].textContent)
            console.log('someone hit me');
            openModal($tankNameContainerArr[i].textContent);
            closeModal();
        })
    }

}
let openModal = (textVer) => {
    $popUpTankInfo.classList.add('tank-info-popup--active');
    $popUpTankInfoOverlay.classList.add('overlay--active');
    myData(myApi, head, textVer)

}
let closeModal = () => {
    $popUpClose.addEventListener('click', () => {
        $popUpTankInfo.classList.remove('tank-info-popup--active');
        $popUpTankInfoOverlay.classList.remove('overlay--active');
    })

}
let myData = async (myApi, head, tv) => {
    try {
        let getResponse = await axios.get(myApi, head),
            getData = await getResponse.data;
        console.log(getData);
        let $infoPopup = d.querySelector('.tank-info-popup');
        console.log($infoPopup)
        for (let i = 0; i < getData.results.length; i++) {
            if (tv == getData.results[i].nametank) {

                $infoPopup.querySelector('.left__name').textContent = getData.results[i].nametank ? getData.results[i].nametank : '???.';
                $infoPopup.querySelector('.left__country').textContent = getData.results[i].country ? getData.results[i].country : '???.';
                $infoPopup.querySelector('.right__type').textContent = getData.results[i].typetank ? getData.results[i].typetank : '???.';
                $infoPopup.querySelector('.right__manufacturer').textContent = getData.results[i].manufacturer ? getData.results[i].manufacturer : '???.';
            }

        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log('... ... ...')
    }
}