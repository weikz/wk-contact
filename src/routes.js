import App from './containers/Layout';
import ContactPage from './containers/ContactPage';

const routes = () => ({
    path: '/',
    component: App,
    indexRoute: {
        component: ContactPage
    }
});

export default routes;