import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Beranda } from './pages/Beranda';
import { TentangKami } from './pages/TentangKami';
import { BerandaUser } from './pages/BerandaUser';
import { TentangKamiUser } from './pages/TentangKamiUser';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Beranda />}>
                </Route>
                <Route path="/tentangkami" element={<TentangKami />}>
                </Route>
                <Route path="/BerandaUser" element={<BerandaUser />}>
                </Route>
                <Route path="/TentangKamiUser" element={<TentangKamiUser />}>
                </Route>
            </Routes>
        </Router>
    )
}