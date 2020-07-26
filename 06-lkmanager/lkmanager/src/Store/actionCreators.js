import * as constants from './actionTypes';
import {getHomeData, getSowingData, getUserData, getStudentData} from './../Api/index';

export const getHomeDataAction = () => {
  return (dispatch) => {
    getHomeData().then((res) => {
      if(res.status_code === 200) {
        const homeData = res.result[0];
        dispatch({
          type: constants.INIT_HOME_DATA,
          homeData
        })
      }
    }).catch(() => {
      alert('首页数据请求失败')
    })
  }
};

export const getSowingDataAction = () => {
  return (dispatch) => {
    getSowingData().then((res) => {
      if(res.status_code === 200) {
        const sowingData = res.result;
        dispatch({
          type: constants.INIT_SOWING_DATA,
          sowingData
        })
      }
    }).catch(() => {
      alert('首页数据请求失败')
    })
  }
}

export const getUserDataAction = (data, callback) => {
  return (dispatch) => {
    getUserData(data).then((res) => {
      if(res.status_code === 200) {
        const userData = res.result;
        dispatch({
          type: constants.INIT_USER_DATA,
          userData
        });
        callback && callback(userData);
      } else {
        alert(res.result)
      }
    }).catch((error) => {
      alert(error)
    })
  }
};

export const getStudentDataAction = () => {
  return (dispatch) => {
    getStudentData().then((res) => {
      if(res.status_code === 200) {
        const studentData = res.result;
        dispatch({
          type: constants.INIT_STUDENT_DATA,
          studentData
        })
      }
    }).catch(() => {
      alert('学生数据请求失败')
    })
  }
}
