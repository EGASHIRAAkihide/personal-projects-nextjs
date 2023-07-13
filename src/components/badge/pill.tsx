type Props = {
  /**
   * Is status be active or inactive?
   */
  status: 'active' | 'inactive';
}

export function BadgePill({ 
  status,
 }: Props) {
  return <div className={`
    cursor-pointer inline-block px-6 py-2 rounded-3xl text-t-on-fill transition-all
    ${status === 'active' ? 'bg-status-success' : 'bg-status-alert'}
  `}>{status === 'active' ? 'active' : 'inactive'}</div>
}