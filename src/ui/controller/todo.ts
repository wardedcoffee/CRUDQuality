import { todoRepository } from "@ui/repository/todo";

interface TodoControllerGetParams {
  page?: number;
}
async function get( params: TodoControllerGetParams) {
  return fetch("api/todos").then(async (respostaDoServidor) => {
    console.log(params);
    return todoRepository.get({
      page: 1,
      limit: 1,
    })
  });
}

export const todoController = {
  get,
};
