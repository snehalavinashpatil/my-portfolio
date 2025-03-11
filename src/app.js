import React,{Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import { Provider } from 'react-redux'; 

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import RestraurantMenu from './components/RestraurantMenu';
import appStore from './components/Utils/appStore';

// const HeadingComponent1 = () => (
//     <h1>Namaste</h1>
//    )

//     const Title = () => <h1>Namaste React</h1>

// const HeadingComponent = () => (
// <div id="container">
//     <HeadingComponent1/>
//  <Title />
// </div>
// )

const about = lazy(()=> import("./components/About"));

const AppLayout = ()=> {
    return (
        <Provider store={appStore}>
        <div className='app'>
            {/* <Header/> */}
            <Outlet/>
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path:'/',
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<Body/>
                },
                {
                    path:'/about',
                    element:<Suspense fallback={<h1>Loading----</h1>}><About/></Suspense>
                },
                {
                    path:'/restraurants/:id',
                    element:<RestraurantMenu/>
                }
            ],
            errorElement:<Error/>
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
