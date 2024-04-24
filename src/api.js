const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

//Получение списка задач
export async function getTodos(){
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.status === 200) {
        throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
}

//Добавление задачи
export async function postTodos(){
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
}

//Изменение задачи(task)
export async function putTodos({text, id}){
    const response = await fetch(baseHost+ `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
}

//Delete task
export async function deleteTodos(){
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
}

//return task list
export async function getUserList(){
    const response = await fetch(userHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
    if (!response.status === 200) {
        throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
}

//Регистрация
export function signUp(login, name, password){
    return fetch(userHost, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response)=>{
        if(response.status === 400) {
            throw new Error("Пользователь уже зарегистрирован");
        }
        return response.json();
    });
}

//Авторизация
export function signIn(login, password){
    return fetch(userHost + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response)=>{
        if(response.status === 400) {
            throw new Error("Неправильный логин\пароль");
        }
        return response.json();
    });
}

