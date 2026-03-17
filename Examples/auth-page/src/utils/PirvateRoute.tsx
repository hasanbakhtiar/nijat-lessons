import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

const PrivateRoute = () => {
    const [authMe, setAuthMe] = useState<null | boolean>(null);

    useEffect(() => {
        const accessToken = cookies.get('AccessToken');
        const refreshToken = cookies.get('RefreshToken');

        if (!accessToken && !refreshToken) {
            setAuthMe(false);
            return;
        }

       
        if (accessToken) {
            axios.get('https://dummyjson.com/auth/me', {
                headers: { Authorization: `Bearer ${accessToken}` }
            })
                .then(res => {
                    if (res.status === 200) setAuthMe(true);
                })
                .catch(() => {
                   
                    tryRefresh(refreshToken);
                });
        } else {
            tryRefresh(refreshToken);
        }
    }, []);

    const tryRefresh = (refreshToken: string | undefined) => {
        if (!refreshToken) {
            setAuthMe(false);
            return;
        }

        axios.post('https://dummyjson.com/auth/refresh', {
            refreshToken,
            expiresInMins: 15,
        })
            .then(res => {
                const { accessToken, refreshToken: newRefreshToken } = res.data;

                cookies.set('accessToken', accessToken, {
                    path: '/',
                    maxAge: 60 * 15,
                });
                cookies.set('refreshToken', newRefreshToken, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7,
                });

                setAuthMe(true);
            })
            .catch(() => {
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
                setAuthMe(false);
            });
    };

    if (authMe === null) return <div>Yüklənir...</div>;

    return authMe ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;