import axios from 'axios';

const baseUrl = 'https://personal-site-106fa.firebaseio.com';

const getAllProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

export default getAllProjects;
