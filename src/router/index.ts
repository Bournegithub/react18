
import type { RouteObject } from 'react-router-dom'
import Home from '../pages/index'
import PageA from '../pages/page-a'
import PageB from '../pages/page-b'
import PageC from '../pages/page-c'


const routes : RouteObject[] = [
  {
		path: '/',
		element: Home(),
	},
	{
		path: '/a',
		element: PageA(),
	},
	{
		path: '/b',
		element: PageB(),
	},
	{
		path: '/c',
		element: PageC(),
	}
]

export default routes;

