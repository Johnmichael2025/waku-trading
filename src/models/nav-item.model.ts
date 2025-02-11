export interface NavItem {
  label: string 
  link: string
  children: {
    label: string 
    link: string
  }[]
}