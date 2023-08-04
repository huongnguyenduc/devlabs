import {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Toast, ToastAction } from './toast';

const TOAST_LIMIT = 20;
const TOAST_EXPIRE_DISMISS_DELAY = 1000;

type ToasterToastProps = ComponentPropsWithoutRef<typeof Toast> & {
  action?: ReactElement<typeof ToastAction>;
  id: string;
  description?: ReactNode;
  title?: ReactNode;
};

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

let count = 0;

const generateId = () => {
  count = (count + 1) % Number.MAX_VALUE;

  return count.toString();
};

type ActionType = typeof actionTypes;

type Action =
  | {
      toast: Partial<ToasterToastProps>;
      type: ActionType['UPDATE_TOAST'];
    }
  | {
      toast: ToasterToastProps;
      type: ActionType['ADD_TOAST'];
    }
  | {
      toastId?: ToasterToastProps['id'];
      type: ActionType['DISMISS_TOAST'];
    }
  | {
      toastId?: ToasterToastProps['id'];
      type: ActionType['REMOVE_TOAST'];
    };

interface State {
  toasts: ToasterToastProps[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'REMOVE_TOAST',
      toastId,
    });
  }, TOAST_EXPIRE_DISMISS_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined ? { ...t, open: false } : t,
        ),
      };
    }

    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

/* -----------------------------------------------------------------------------
 * Utility: Toast
 * -------------------------------------------------------------------------- */

export type ToastProps = Omit<ToasterToastProps, 'id'>;

export const toast = (props: ToastProps) => {
  const id = generateId();

  const update = (props: ToasterToastProps) =>
    dispatch({ type: 'UPDATE_TOAST', toast: { ...props, id } });

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        !open && dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
};

/* -----------------------------------------------------------------------------
 * Hook: useToast
 * -------------------------------------------------------------------------- */

export const useToast = () => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      const index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
};
