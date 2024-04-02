import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Aside from '../Aside/Aside';

import style from '../../style/App.module.css';

function Layout() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Aside />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
