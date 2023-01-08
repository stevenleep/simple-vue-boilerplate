import request, { createRequestCancelId } from "@/helpers/http";
import { TodoModel } from "./Model/TodoModel";
import { AxiosResponse } from "axios";

/**
 * @param {Number} todoId - The id of the todo
 */
export function getTodoDetail(todoId: number) {
  return request.get<TodoModel, AxiosResponse<TodoModel>>(`/todos/${todoId}`, {
    noAuth: true,
    cancelId: createRequestCancelId(),
  });
}
