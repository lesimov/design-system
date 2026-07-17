import type { ReactNode } from 'react';
import type { ToastType } from './Toasts';

export interface ToastOptions {
  /** Duration in ms before auto-dismiss. 0 = persistent. Default: 4000 */
  duration?: number;
  /** Heading text */
  title?: string;
  /** Action button / CTA element */
  action?: ReactNode;
  /** Custom icon element */
  icon?: ReactNode;
}

export interface ToastEntry {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration: number;
  action?: ReactNode;
  icon?: ReactNode;
}

type Listener = (entries: ToastEntry[]) => void;
type DismissListener = (id: string) => void;

let entries: ToastEntry[] = [];
let listeners = new Set<Listener>();
let dismissListeners = new Set<DismissListener>();
let counter = 0;

function notify() {
  listeners.forEach((fn) => fn([...entries]));
}

function generateId(): string {
  return `toast-${++counter}`;
}

function add(type: ToastType, message: string, opts?: ToastOptions): string {
  const id = generateId();
  const entry: ToastEntry = {
    id,
    type,
    message,
    title: opts?.title,
    duration: opts?.duration ?? 4000,
    action: opts?.action,
    icon: opts?.icon,
  };
  entries = [...entries, entry];
  notify();
  return id;
}

function dismiss(id: string): void {
  entries = entries.filter((e) => e.id !== id);
  notify();
  dismissListeners.forEach((fn) => fn(id));
}

function clear(): void {
  entries = [];
  notify();
}

export const toast = {
  /** Show a default toast */
  show: (message: string, opts?: ToastOptions) => add('default', message, opts),
  /** Show a warning toast */
  warning: (message: string, opts?: ToastOptions) => add('warning', message, opts),
  /** Show an error toast */
  error: (message: string, opts?: ToastOptions) => add('error', message, opts),
  /** Dismiss a specific toast by id */
  dismiss,
  /** Clear all toasts */
  clear,

  /** @internal */
  _subscribe(fn: Listener) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  /** @internal */
  _subscribeDismiss(fn: DismissListener) {
    dismissListeners.add(fn);
    return () => dismissListeners.delete(fn);
  },
  /** @internal */
  _getEntries() {
    return entries;
  },
};

export type { Listener, DismissListener };