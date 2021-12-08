import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate,  } from 'react-router-dom';

// const PrivateRoute = ({ element: Component, ...rest }) => {
    
    
 {
   /* {isAuthenticated && user.id !== undefined && (
          <>
            <Route
              path='/login'
              element={<Navigate replace to='/dashboard' />}
            />
            <Route
              path='/register'
              element={<Navigate replace to='/dashboard' />}
            />
          </>
        )} */
 }

//   return (
//     <Routes>
//       <Route
//         {...rest}
//         render={(props) =>
//           isAuthenticated ? <Component {...props} /> : <Navigate replace to='/login' />
//         }
//       />
//     </Routes>
//   );
// };



const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
    return isAuthenticated ? children : <Navigate to='/login' />;
};

export default PrivateRoute;