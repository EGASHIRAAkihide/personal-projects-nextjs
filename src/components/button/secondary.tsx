'use client'

type Props = {
  disabled?: boolean;
  name?: string;
  onClick: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
}

export function ButtonSecondary({
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
    border border-btn-normal-light text-btn-normal-light
    hover:border-btn-hover-light hover:text-btn-hover-light hover:bg-sea-50
    active:border-btn-active-light active:text-btn-active-light active:bg-sea-50
    focus:border-2 focus:border-bd-focused-light
    disabled:border-btn-disabled-light disabled:text-btn-disabled-light
    h-[56px]
    p-4
    rounded-lg
    transition-all
    w-full'
  >{text}</button>
}