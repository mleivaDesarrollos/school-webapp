export const API_URL = process.env.REACT_APP_API_URL;

export const PRIMARYCOLOR = process.env.REACT_APP_PRIMARY_COLOR;

export const SECONDARYCOLOR = process.env.REACT_APP_SECONDARY_COLOR;

export const LIGHTCOLOR = process.env.REACT_APP_LIGHT_COLOR;

export const FOREGROUND = process.env.REACT_APP_FOREGROUND;

export const API = {
  student: {
    list: `/student`,
    add: '/student',
  },
};

export const SITELINKS = {
  student: {
    list: '/student',
    add: '/student/add',
  },
  teacher: {
    list: '/teacher',
  },
  course: {
    list: '/course',
  },
};
