import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Beranda } from './pages/Beranda';
import { TentangKami } from './pages/TentangKami';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Beranda />}>
                </Route>
                <Route path="/tentangkami" element={<TentangKami />}>
                </Route>
            </Routes>
        </Router>
    )
}