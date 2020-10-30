import { RESET_DONE } from "./constants";
import { getConfig, setConfig, updateCanUndoRedo } from "./utils-undo-redo";

export default ({
  paths,
  store
}: {
  paths: UndoRedoOptions[];
  store: any;
}) => async (namespace: string) => {
  const config = getConfig(paths)(namespace);

  if (Object.keys(config).length) {
    const done: [] = [];
    config.newMutation = false;
    store.commit(`${namespace}${RESET_DONE}`);

    config.newMutation = true;

    setConfig(paths)(namespace, {
      ...config,
      done
    });

    updateCanUndoRedo({ paths, store })(namespace);
  }
};
