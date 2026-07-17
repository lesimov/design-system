import './kbd.css';

export type KBDSize = 'sm' | 'md';

export interface KBDProps {
  /** Keyboard key label */
  children?: React.ReactNode;
  /** Size variant */
  size?: KBDSize;
  /** Additional class names */
  className?: string;
}

export const KBD = ({
  children,
  size = 'md',
  className = '',
}: KBDProps) => {
  return (
    <kbd
      className={`flowbite-kbd flowbite-kbd--${size}${className ? ' ' + className : ''}`}
    >
      {children}
    </kbd>
  );
};

export default KBD;