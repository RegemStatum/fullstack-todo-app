import { Response, Request } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;

    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(id);
    const allTodos = await Todo.find();
    res
      .status(200)
      .json({ message: "Todo deleted", todo: deletedTodo, todos: allTodos });
  } catch (e) {
    throw e;
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(id, {
      ...body,
    });
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (e) {
    throw e;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;
    const { name, description, status } = body;

    const todo: ITodo = new Todo({
      name,
      description,
      status,
    });

    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (e) {
    throw e;
  }
};

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: Array<ITodo> = await Todo.find();
    res.status(200).json({ todos });
  } catch (e) {
    throw e;
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
