import { useEffect, useRef, useState } from 'react';
import { toast } from './toast';
import type { ToastEntry } from './toast';
import { Toasts } from './Toasts';

type TimerMap = Map<string, ReturnType<typeof setTimeout>>;

type ToastState = ToastEntry & { state: 'entering' | 'visible' | 'exiting' };

function clearTimer(map: TimerMap, key: string) {
  const t = map.get(key);
  clearTimeout(t);
}

export const ToastContainer = () => {
  const [items, setItems] = useState<ToastState[]>([]);
  const timersRef = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  // Subscribe to toast events
  useEffect(() => {
    const unsub = toast._subscribe((entries) => {
      setItems((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newEntries = entries
          .filter((e) => !existingIds.has(e.id))
          .map((e) => ({ ...e, state: 'entering' as const }));

        const entryIds = new Set(entries.map((e) => e.id));
        const remaining = prev.filter((p) => entryIds.has(p.id) || p.state === 'exiting');

        return [...remaining, ...newEntries];
      });
    });

    return () => {
      unsub();
      timersRef.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  // Handle enter animation → visible, then schedule dismiss
  useEffect(() => {
    items.forEach((item) => {
      if (item.state === 'entering') {
        const t = setTimeout(() => {
          setItems((prev) =>
            prev.map((p) => (p.id === item.id ? { ...p, state: 'visible' as const } : p))
          );
        }, 20);
        timersRef.current.set(item.id + '-enter', t);
      }

      if (item.state === 'visible' && item.duration > 0) {
        const t = setTimeout(() => {
          setItems((prev) =>
            prev.map((p) => (p.id === item.id ? { ...p, state: 'exiting' as const } : p))
          );
        }, item.duration);
        timersRef.current.set(item.id, t);
      }

      if (item.state === 'exiting') {
        const t = setTimeout(() => {
          setItems((prev) => prev.filter((p) => p.id !== item.id));
        }, 300);
        timersRef.current.set(item.id + '-exit', t);
      }
    });

    return () => {
      items.forEach((item) => {
        clearTimer(timersRef.current, item.id);
        clearTimer(timersRef.current, item.id + '-enter');
        clearTimer(timersRef.current, item.id + '-exit');
      });
    };
  }, [items]);

  const handleDismiss = (id: string) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, state: 'exiting' as const } : p))
    );
  };

  if (items.length === 0) return null;

  return (
    <div className="flowbite-toast-container" aria-live="polite">
      {items.map((item) => (
        <div
          key={item.id}
          className={`flowbite-toast-wrapper flowbite-toast-wrapper--${item.state}`}
        >
          <Toasts
            type={item.type}
            title={item.title}
            closable
            onClose={() => handleDismiss(item.id)}
            action={item.action}
            icon={item.icon}
          >
            {item.message}
          </Toasts>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;