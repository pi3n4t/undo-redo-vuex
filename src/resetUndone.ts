import { RESET_UNDONE } from "./constants";
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
    const undone: [] = [];
    config.newMutation = false;
    store.commit(`${namespace}${RESET_UNDONE}`);

    config.newMutation = true;

    setConfig(paths)(namespace, {
      ...config,
      undone
    });

    updateCanUndoRedo({ paths, store })(namespace);
  }
};
