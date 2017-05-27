import colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const config = {
  palette: {
    primary1Color: colors.blue900,
  },
  userAgent: 'all',
};

const CDTheme = getMuiTheme(config);

export default CDTheme;
