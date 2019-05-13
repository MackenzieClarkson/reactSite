export default {
  items: [
    {
      name: 'Home',
      url: '/',
      icon: 'cui-home',

    },
    {
      name: 'Picture of the Day',
      url: '/apod',
      icon: 'cui-star',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Asteroid Tracker',
      url: '/asteroidTracker',
      icon: 'cui-globe',
    },
    {
      name: 'siteInfo',
      url: '/siteInfo',
      icon: 'cui-code',
    },



    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },

  ],
};
