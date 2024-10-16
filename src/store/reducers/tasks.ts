import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task_Item from "../../models/Task";

type TaskState = {
  listTask: Task_Item[];
};

const initialState: TaskState = {
  listTask: [
    {
      cd: 0,
      title: "Ir para academia",
      category: "Normal",
      status: "Pendente",
      desc: "Dia de Perna",
    },
    {
      cd: 1,
      title: "Cortar cabelo",
      category: "Urgente",
      status: "Pendente",
      desc: "#Nevou",
    },
    {
      cd: 2,
      title: "Organizar mesa",
      category: "Importante",
      status: "Pendente",
      desc: "...",
    },
    {
      cd: 3,
      title: "Ler livro",
      category: "Importante",
      status: "Concluida",
      desc: "Parei na p.27",
    },
    {
      cd: 4,
      title: "Fazer compras",
      category: "Importante",
      status: "Concluida",
      desc: "Comprar sal",
    },
  ],
};

const taskSlice = createSlice({
  name: "taskReducer",
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state.listTask = state.listTask.filter(
        (taskIndex) => taskIndex.cd !== action.payload,
      );
    },
    applyEdit: (state, action: PayloadAction<Task_Item>) => {
      const editingItem = state.listTask.findIndex(
        (taskIndex) => taskIndex.cd === action.payload.cd,
      );

      if (editingItem >= 0) {
        state.listTask[editingItem] = action.payload;
      }
    },
    finishTask: (state, action: PayloadAction<Task_Item>) => {
      const finishingItem = state.listTask.findIndex(
        (taskIndex) => taskIndex.cd === action.payload.cd,
      );

      if (finishingItem >= 0) {
        if (state.listTask[finishingItem].status === "Concluida") {
          state.listTask[finishingItem].status = "Pendente";
        } else {
          state.listTask[finishingItem] = action.payload;
        }
      }
    },
    insertTask: (state, action: PayloadAction<Task_Item>) => {
      const insertingItem = action.payload;
      state.listTask.push(insertingItem);
    },
  },
});

export const { removeTask, applyEdit, finishTask, insertTask } =
  taskSlice.actions;
export default taskSlice.reducer;
