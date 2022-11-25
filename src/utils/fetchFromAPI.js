import axios from "axios"
const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    params: {
        maxResults: '50',
        regionCode: 'In',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': 'a1738d22c2msh55ba7c33e868c7cp17d2a7jsn632bc2391779',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

// url is a prop that we are gonna pass for each diff url like channels, videos
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}
