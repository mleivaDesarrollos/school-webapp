const CracoLessPlugin = require('craco-less');
const dotenv = require('dotenv');

const ENV = process.env.NODE_ENV;

if (ENV === 'development') {
  dotenv.config({ path: '.env.development' });
} else if (ENV === 'production') {
  dotenv.config({ path: '.env.production' });
}

const PRIMARYCOLOR = process.env.REACT_APP_PRIMARY_COLOR;
const SECONDARYCOLOR = process.env.REACT_APP_SECONDARY_COLOR;

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': PRIMARYCOLOR,
              '@btn-ghost-border': SECONDARYCOLOR,
              '@btn-ghost-color': SECONDARYCOLOR,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
