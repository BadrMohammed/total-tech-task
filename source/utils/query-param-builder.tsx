/* eslint-disable prettier/prettier */
const queryParamsStringBuilder = (dataObj: any) => {
  let str = '';
  Object.keys(dataObj)?.forEach((key, keyIndex) => {
    const filterArr = dataObj[key];
    if (typeof filterArr === 'object') {
      filterArr?.forEach((element: any, i: any) => {
        str += `${keyIndex === 0 ? '' : '&'}${key}[]=${element}${
          filterArr.length === i + 1 ? '' : '&'
        }`;
      });
    } else if (!dataObj[key]) {
      str += '';
    } else {
      str += `${keyIndex === 0 && dataObj[key] ? '' : '&'}${key}=${
        dataObj[key]
      }`;
    }
  });
  return str.replace('&&', '&').replace('?&', '?');
};

export default queryParamsStringBuilder;
