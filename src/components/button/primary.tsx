'use client'

type Props = {
  disabled?: boolean;
  name?: string;
  onClick: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
}

export function ButtonPrimary({
  disabled = false,
  name,
  onClick,
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
    className='
    bg-btn-normal-light dark:bg-btn-normal-dark
    focus:bg-btn-normal-light dark:focus:bg-btn-normal-dark
    focus:outline
    focus:outline-2
    hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark
    active:bg-btn-active-light dark:active:bg-btn-active-dark
    disabled:bg-btn-disabled-light dark:disabled:bg-btn-disabled-dark
    h-[56px]
    p-4
    outline-offset-2
    outline-bd-focused
    rounded-lg
    text-t-on-fill
    transition-all
    w-full'
  >{text}</button>
}