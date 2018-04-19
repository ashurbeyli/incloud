import config from './config';

const prepareTasksUrl = (id) => {
  let url = config.API_URL + config.TASKS_PATH;
  if (id) {
    url += `/${id}`;
  }
  return url;
};

const prepareHeaders = () => {
  return {
    Accept: 'application/json',
    token: 'SOME_TOKEN', //@TODO need to update on complete Authentication
    'Content-Type': 'application/json',
  };
};

class TasksApi {


  static get(id = null) {
    return new Promise((resolve, reject) => {
      fetch(prepareTasksUrl(id), {
        method: 'get',
        headers: prepareHeaders(),
      })
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  }
  static post(body) {
    return new Promise((resolve, reject) => {
      fetch(prepareTasksUrl(), {
        method: 'post',
        body: JSON.stringify(body),
        headers: prepareHeaders(),
      })
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  }
  static put(body) {
    return new Promise((resolve, reject) => {
      fetch(prepareTasksUrl(), {
        method: 'put',
        body: JSON.stringify(body),
        headers: prepareHeaders(),
      })
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  }
  static deleteTask(id) {
    return new Promise((resolve, reject) => {
      fetch(prepareTasksUrl({ id }), {
        method: 'delete',
        headers: prepareHeaders(),
      })
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  }
}

export default TasksApi;