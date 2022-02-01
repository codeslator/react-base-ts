import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout')); // Component on Demand
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../lazyload/pages/LazyPage2')); // Component on Demand
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../lazyload/pages/LazyPage3')); // Component on Demand

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
]