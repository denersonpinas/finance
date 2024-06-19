import { TbChartInfographic } from 'react-icons/tb'
import { MdOutlineDashboard } from 'react-icons/md'

interface Router {
  title: string
  icon: JSX.Element
  to: string
}

export const navigation: Router[] = [
  {
    title: 'Dashboard',
    icon: <MdOutlineDashboard size={16} />,
    to: '/dashboard'
  },
  {
    title: 'Orçamento',
    icon: <TbChartInfographic size={16} />,
    to: '/orcamento'
  }
]
