import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-brand text-white hover:bg-blue-700',
  light: 'bg-white text-ink hover:bg-tint',
  outline: 'border border-line text-ink hover:border-ink',
}

export function Button({ to, variant = 'primary', className = '', children }) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles[variant]} ${className}`
  return <Link to={to} className={classes}>{children}</Link>
}
