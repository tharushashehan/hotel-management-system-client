
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

export const navItemsAdmin: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'icon-layers'
  },
  {
    name: 'Rooms',
    url: '/admin/rooms',
    icon: 'icon-grid',
    children: [
      {
        name: 'create Room',
        url: '/admin/rooms/create',
        icon: 'icon-map'
      }]
  },
  {
    name: 'Users',
    url: '/admin/users',
    icon: 'icon-people',
    children: [
      {
        name: 'create user',
        url: '/admin/users/create',
        icon: 'icon-user'
      }]
  },
];

export const navItemsEmployee: NavData[] = [
  {
    title: true,
    name: 'Employee'
  },
  {
    name: 'Employee',
    url: '/employee',
    icon: 'icon-user-following',
    children: [
      {
        name: 'Dashboard',
        url: '/employee/dashboard',
        icon: 'icon-layers'
      },
      {
        name: 'Apply Leave',
        url: '/employee/apply-leave',
        icon: 'icon-plane'
      },
      {
        name: 'Room Booking',
        url: '/employee/room-booking',
        icon: 'icon-anchor'
      },
      {
        name: 'Room Details',
        url: '/employee/room-details',
        icon: 'icon-tag'
      }]
  },
];
