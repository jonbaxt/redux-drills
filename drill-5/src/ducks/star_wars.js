import axios from 'axios';

const initialState = {
    people: [{ name: 'Harry Potter' }, { name: 'Gandolf' }],
    planets: [{ name: 'Xandar' }, { name: 'Hala' }],
    starships: [{ name: 'USS Enterprise' }, { name: 'Klingon Bird-of-Prey' }]
}

const GET_PEOPLE = 'GET_PEOPLE';
const GET_PLANETS = 'GET PLANETS';
const GET_STARSHIPS = 'GET STARSHIPS';

export function getPeople() {

    const people = axios.get('https://swapi.co/api/people')
        .then(res => {
            console.log('res', res);
            return res.data.results;
        }).catch(() => console.log(`Had trouble jumping from the router: star_wars.js`))

    return {
        type: GET_PEOPLE,
        payload: people
    }
}

export function getPlanets() {
    const planets = axios.get('https://swapi.co/api/planets')
    .then(res => {
        console.log('res', res);
        return res.data.results;
    }).catch(() => console.log(`Had trouble jumping from the router: star_wars.js`))

    return {
        type: GET_PLANETS,
        payload: planets
    }
}

export function getStarships() {
    const starships = axios.get('https://swapi.co/api/starships')
    .then(res => {
        console.log('res', res);
        return res.data.results;
    }).catch(() => console.log(`Had trouble jumping from the router: star_wars.js`))

    return {
        type: GET_STARSHIPS,
        payload: starships
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PEOPLE + '_FULFILLED':
            return Object.assign({}, state, { people: action.payload })
        case GET_STARSHIPS + '_FULFILLED':
            return Object.assign({}, state, { starships: action.payload })
        case GET_PLANETS + '_FULFILLED':
            return Object.assign({}, state, { planets: action.payload })
        default:
            return state;
    }
}

