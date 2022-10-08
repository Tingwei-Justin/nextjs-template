import { FC } from 'react'

interface Props {
  className?: string
  children?: any
}

const Navbar: FC<Props> = ({ className }) => {
  // const rootClassName = cn(s.root, className)

  return (
    <div className="sticky top-0 z-50 h-14 bg-[#1c1c1c] text-white">
      <div>Nav bar</div>
    </div>
  )
}

export default Navbar
