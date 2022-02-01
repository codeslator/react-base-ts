import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from './routes';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
import Logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {/* <Route path="/" element={<h1>Home</h1>} />
            <Route path="home" element={<h1>Home</h1>} />
            <Route path="about" element={<h1>About Page</h1>} />
            <Route path="users" element={<h1>Users Page</h1>} /> */}
            {routes.map(({ path, Component }) => (<Route path={path} element={<Component />} key={path} />))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
