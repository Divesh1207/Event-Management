import { createBrowserRouter, Outlet } from 'react-router-dom';
import Card from '../Card/Card';
import EventDetails from '../EventDetails/EventDetails';
import NavBar from '../NavBar/NavBar';
import FindEvents from '../FindEvents/FindEvents';


export const routes = createBrowserRouter([
    {

        path: '/',
        element: (
            <>
                <NavBar />
                <Outlet />
            </>
        ),
        children: [
            {
                path: '/',
                element: <Card />,
            },
            {
                path: '/EventDetails/:id',
                element: <EventDetails />,
            },
            {
                path: '/FindEvents',
                element: <>
                    <FindEvents />
                </>
            }

        ],
    },


]);