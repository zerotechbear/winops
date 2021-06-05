import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';

import ResetForm from './components/Login/ResetForm';
import NewProject from './components/ProjectPanel/Projects/NewProject';
import MemberPanel from './components/ProjectPanel/Members/MemberPanel';
import NewMember from './components/ProjectPanel/Members/NewMember';


function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact>
          <LoginPage />
        </Route>
        <Route path='/reset'>
          <ResetForm />
        </Route>
        <Route path='/home'>
          <ProjectPage />
        </Route>
        <Route path='/members'>
          <MemberPanel />
        </Route>
        <Route path='/new-member'>
          <NewMember />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/* 
        <Route path='/profile'></Route>
        <Route path='/about'>
          <ProjectPage />
        </Route>
        <Route path='/tutorials'>
          <ProjectPage />
        </Route>
        <Route path='/help'>
          <ProjectPage />
        </Route>
        <Route path='/new-project'>
          <NewProject />
        </Route>
         */
