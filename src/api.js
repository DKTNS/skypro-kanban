const baseHost = "https://wedev-api.sky.pro/api/kanban";
export const userHost = "https://wedev-api.sky.pro/api/user";

//Получение списка задач
export async function getTodos({ token }) {
  const response = await fetch(baseHost, {
      headers: {
          Authorization: `Bearer ${token}`,
      }
  });

  if (!response.status === 200) {
      throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}

//Добавление задачи
export async function postTodos( taskData ) {
  const response = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${taskData.token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title: taskData.title,
      topic: taskData.topic,
      status: taskData.status,
      description: taskData.description,
      date: taskData.date,
    }),
  });
  if (!response.status === 201) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//Изменение задачи(task)
export async function putTodos({ token, id, taskData }) {
  const response = await fetch(baseHost + `/${id}`, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify(taskData)
  });


  if (!response.status === 201) {
      throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}
//Delete task
export async function deleteTodos({ taskData, id, token }) {
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
    body: JSON.stringify({
      taskData,
    }),
  });
  if (!response.status === 201) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//Регистрация
export function signUp({ login, name, password }) {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Пользователь уже зарегистрирован");
    }
    return response.json();
  });
}

//Авторизация
export function signIn({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",

    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неправильный логин/пароль");
    }
    return response.json();
  });
}

//return user list
export async function getUserList(token) {
  const response = await fetch(userHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 201) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}