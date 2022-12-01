import axios from 'axios';


const instance=axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key={49796b58cc19e321249acc9cbeee2c2a}&language=en-US&page=1',

});
export default instance;