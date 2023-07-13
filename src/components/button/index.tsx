'use client'

type Props = {
  disabled?: boolean;
  name?: string;
  onClick: () => void;
  status: 'primary' | 'secondary' | 'tertiary';
  text: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
}

export function Button({
  disabled = false,
  name,
  onClick,
  status = 'primary',
  text,
  type = 'button',
  value,
}: Props) {
  return <button
    disabled={disabled}
    name={name}
    onClick={onClick}
    type={type}
    value={value}
    className={`
      h-[56px]
      p-4
      rounded-lg
      transition-all
      w-full

      ${status === 'primary' && 'bg-btn-normal-light dark:bg-btn-normal-dark text-t-on-fill'}
      ${status === 'secondary' && 'border border-btn-normal-light text-btn-normal-light'}
      ${status === 'tertiary' && 'text-btn-normal-light underline'}

      ${status === 'primary' && 'focus:bg-btn-normal-light focus:dark:bg-btn-normal-dark focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-bd-focused'}
      ${status === 'secondary' && 'focus:border-2 focus:border-bd-focused-light'}
      ${status === 'tertiary' && 'focus:border-2 focus:border-bd-focused-light'}

      ${status === 'primary' && 'hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark'}
      ${status === 'secondary' && 'hover:border-btn-hover-light hover:text-btn-hover-light hover:bg-sea-50'}
      ${status === 'tertiary' && 'hover:text-btn-hover-light'}

      ${status === 'primary' && 'active:bg-btn-active-light dark:active:bg-btn-active-dark'}
      ${status === 'secondary' && 'active:border-btn-active-light active:text-btn-active-light active:bg-sea-50'}
      ${status === 'tertiary' && 'active:text-btn-active-light'}

      ${status === 'primary' && 'disabled:bg-btn-disabled-light dark:disabled:bg-btn-disabled-dark'}
      ${status === 'secondary' && 'disabled:border-btn-disabled-light disabled:text-btn-disabled-light'}
      ${status === 'tertiary' && 'disabled:text-btn-disabled-light'}
    `}
  >{text}</button>
}
  