// in src/StoreAdmin.js
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'
import patientsList from './patientsList';

export const Dashboard = () => (
    <Admin basename="/Dashboard" dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="patients" list= {patientsList} />
        {/* <Resource name="patients" list= {patientsList} /> */}

    </Admin>
);

export default Dashboard
