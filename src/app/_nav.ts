interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Rooms',
    url: '/admin/rooms',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'dashboard',
        url: '/admin/rooms/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'create Room',
        url: '/admin/rooms/create',
        icon: 'icon-puzzle'
      }]
  },
  {
    name: 'Users',
    url: '/admin/users',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'dashboard',
        url: '/admin/users/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'create user',
        url: '/admin/users/create',
        icon: 'icon-puzzle'
      }]
  }
];
