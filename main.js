const d = document;
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
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Its good to be alive')
    }
}
d.addEventListener('DOMContentLoaded', requestData);