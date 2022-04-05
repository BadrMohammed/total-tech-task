/* eslint-disable prettier/prettier */
import {
  saveRepositoriesData,
  updateLoader,
} from '../../redux/reducers/repositorySlice';
import queryParamsStringBuilder from '../../utils/query-param-builder';
import httpService from './http-service';

const repositoryService = (dispatch: Function, page: Number) => {
  if (page === 1) {
    dispatch(updateLoader(true));
  }
  let query = {order: 'desc', sort: 'stars', q: 'created:>2019-10-22', page};

  let url = `https://api.github.com/search/repositories?${queryParamsStringBuilder(
    query,
  )}`;

  httpService
    .get(url)
    .then(response => {
      if (response.data.items !== undefined) {
        if (response.data.items.length > 0) {
          let result = [];
          for (var count = 0; count < response.data.items.length; count++) {
            result.push({
              name: response.data.items[count].full_name,
              description: response.data.items[count].description,
              owner_photo: response.data.items[count].owner.avatar_url,
              owner_userName: response.data.items[count].owner.login,
              stars: response.data.items[count].stargazers_count,
              issues: response.data.items[count].open_issues,
            });
          }

          dispatch(saveRepositoriesData(result));
          if (page === 1) {
            dispatch(updateLoader(false));
          }
        }
      }
    })
    .catch(error => {
      if (page === 1) {
        dispatch(updateLoader(false));
      }
      console.log(error);
    });
};

export default repositoryService;
