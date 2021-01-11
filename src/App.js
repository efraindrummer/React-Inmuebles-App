import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { ListaInmuebles } from './componentes/vistas/ListaInmuebles';
import { Grid, MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import { AppNavbar } from './componentes/layout/AppNavbar';

function App() {
  return (
    <div>
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
            </Switch>
          </Grid>
          {/* <ListaInmuebles /> */}
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
