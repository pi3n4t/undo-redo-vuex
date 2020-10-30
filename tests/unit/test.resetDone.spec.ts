import Vue from "vue";
import store from "../store";
import { undo, resetDone, resetUndone } from "./utils-test";

const item = {
  foo: "bar"
};

const state: any = store.state;

describe("Simple testing for undo/redo on a namespaced vuex store", () => {
  it("Add item to list", () => {
    const expectedState = [{ ...item }];

    // Commit the item to the store and assert
    store.commit("list/addItem", { item });

    expect(state.list.list).toEqual(expectedState);
  });
  it("Check 'canUndo' value; The undo function should remove the item", async () => {
    expect(state.list.canUndo).toBeTruthy();

    await undo(store)("list");
    await Vue.nextTick();

    // Check 'canUndo' value, Assert list items after undo
    expect(state.list.canUndo).toBeFalsy();
    expect(state.list.list).toEqual([]);
  });
  it("Add another item", async () => {
    const anotherItem = { foo: "baz" };
    const expectedState = [{ ...item }, { ...anotherItem }];

    // Commit the items to the store and assert
    store.commit("list/addItem", { item });
    store.commit("list/addItem", { item: anotherItem });
    expect(state.list.list).toEqual(expectedState);
  });
  it("Empty undone stack and check if empty", async () => {
    expect(state.list.canRedo).toBeTruthy();

    await resetUndone(store)("list");
    await Vue.nextTick();

    expect(state.list.canRedo).toBeFalsy();
  });
  it("Empty done stack and check if empty", async () => {
    expect(state.list.canUndo).toBeTruthy();

    await resetDone(store)("list");
    await Vue.nextTick();

    expect(state.list.canUndo).toBeFalsy();
  });
});
