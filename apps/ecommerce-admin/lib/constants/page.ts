export const page = {
  // Authenticated pages
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },

  // Common
  home: '/',

  // Store
  store: {
    billboards: (id: string, subPath = '') => `/${id}/billboards${subPath}`,
    categories: (id: string, subPath = '') => `/${id}/categories${subPath}`,
    colors: (id: string, subPath = '') => `/${id}/colors${subPath}`,
    orders: (id: string, subPath = '') => `/${id}/orders${subPath}`,
    overview: (id: string) => `/${id}`,
    products: (id: string, subPath = '') => `/${id}/products${subPath}`,
    settings: (id: string) => `/${id}/settings`,
    sizes: (id: string, subPath = '') => `/${id}/sizes${subPath}`,
  },
};
