import {Create, SimpleForm, TextInput, DateInput} from 'react-admin';
const patientCreate = (props) => {
  return (
    <Create title='Create new patient'{...props}>
        <SimpleForm>
            <TextInput source='Name'/>
            <TextInput disabled source='id' />
            <TextInput source='Name' />
            <TextInput source='Gender' />
            <TextInput source='Phone' />
            <DateInput source='birthDate' />
            <TextInput source='martialStatus' />
            <TextInput source='childrenNo' />
            <TextInput source='Duration' />
            <TextInput source='symptom' />
            <TextInput source='treatment' />
            <TextInput source='level' />
            <TextInput source='Msm' />
            <TextInput source='aug' />
            <TextInput source='ect' />

        </SimpleForm>
    </Create>
  )
}

export default patientCreate