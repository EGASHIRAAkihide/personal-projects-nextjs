'use client'

type Props = {
  disabled?: boolean;
  name?: string;
  onClick: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
}

export function ButtonTertiary({
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
    text-btn-normal-light
    hover:text-btn-hover-light
    active:text-btn-active-light
    focus:border-2 focus:border-bd-focused-light
    disabled:text-btn-disabled-light
    h-[56px]
    p-4
    rounded-lg
    transition-all
    underline
    w-full'
  >{text}</button>
}