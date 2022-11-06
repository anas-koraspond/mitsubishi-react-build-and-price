import * as React from "react";

const actionTypes = {
  idle: "idle",
  pending: "pending",
  rejected: "rejected",
  resolved: "resolved"
};

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false);

  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  );
}

function asyncReducer(state, action) {
  switch (action.type) {
    case actionTypes.pending: {
      return { status: actionTypes.pending, data: null, error: null };
    }
    case actionTypes.resolved: {
      return { status: actionTypes.resolved, data: action.data, error: null };
    }
    case actionTypes.rejected: {
      return { status: actionTypes.rejected, data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action Type ${action.type}`);
    }
  }
}

function useAsync(initialState = {}) {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const { status, data, error } = state;

  const run = React.useCallback(
    (promise) => {
      dispatch({ type: actionTypes.pending });
      promise.then(
        (data) => dispatch({ type: actionTypes.resolved, data: data }),
        (error) => dispatch({ type: actionTypes.rejected, error: error })
      );
    },
    [dispatch]
  );

  const setData = React.useCallback(
    (data) => dispatch({ type: actionTypes.resolved, data }),
    [dispatch]
  );

  const setError = React.useCallback(
    (error) => dispatch({ type: actionTypes.rejected, error }),
    [dispatch]
  );

  return {
    status,
    data,
    error,
    setData,
    setError,
    run,
    isPending: actionTypes.pending === status,
    isRejected: actionTypes.rejected === status,
    isResolved: actionTypes.resolved === status
  };
}

export default useAsync;
