// in src/StoreAdmin.js
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import patientsList from './patient/patientsList';
import patientCreate from './patient/patientCreate';
import usersList from './user/usersList'
import UserEdit from './user/usersEdit';
import UserCreate from './user/usersCreate';

export const Dashboard = () => (
    <Admin basename="/Dashboard" dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="patients" list= {patientsList} create={patientCreate} />
        <Resource name="users" list={usersList} edit={UserEdit} create={UserCreate}/>

    </Admin>
);

export default Dashboard
