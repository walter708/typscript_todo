import React, {
  createContext,
  PropsWithChildren,
  FC,
  ReactElement,
  useState,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [updated, setUpdate] = useState<boolean>(false);
  const toggleUpdateHandler = () =>
    updated ? setUpdate(false) : setUpdate(true);
  return (
    <TaskStatusChangedContext.Provider
      value={{
        updated: updated,
        toggle: toggleUpdateHandler,
      }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};
