import Vue from "vue";

export const redo = (store: any) => async (namespace: string = "") => {
  await store.dispatch(`${namespace ? `${namespace}/` : ""}redo`);
  await Vue.nextTick();
};

export const undo = (store: any) => async (namespace: string = "") => {
  await store.dispatch(`${namespace ? `${namespace}/` : ""}undo`);
  await Vue.nextTick();
};

export const clear = (store: any) => async (namespace: string = "") => {
  await store.dispatch(`${namespace ? `${namespace}/` : ""}clear`);
  await Vue.nextTick();
};

export const reset = (store: any) => async (namespace: string = "") => {
  await store.dispatch(`${namespace ? `${namespace}/` : ""}reset`);
  await Vue.nextTick();
};

export const resetDone = (store: any) => async (namespace: string = "") => {
  await store.dispatch(`${namespace ? `${namespace}/` : ""}resetDone`);
  await Vue.nextTick();
};

export const resetUndone = (store: any) => async (namespace: string = "") => {
  await store.dispatch(`${namespace ? `${namespace}/` : ""}resetUndone`);
  await Vue.nextTick();
};
