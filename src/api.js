const baseHost = "https://wedev-api.sky.pro/api/kanban";
export const userHost = "https://wedev-api.sky.pro/api/user";

//Получение списка задач
export async function getTodos({ token }) {
  const response = await fetch(baseHost, {
    metod: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Проверка получен ли токе в api и список юзеров:", token);
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//Добавление задачи
export async function postTodos({ task, token }) {
  const response = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ task }),
  });
  if (!response.status === 201) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//Изменение задачи(task)
export async function putTodos({ task, _id, token }) {
  const response = await fetch(baseHost + `/${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: JSON.stringify({
      task,
      _id,
      token,
    }),
  });
  if (!response.status === 201) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//Delete task
export async function deleteTodos({ task, _id, token }) {
  const response = await fetch(baseHost + `/${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
    body: JSON.stringify({
      task,
      _id,
      token,
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
