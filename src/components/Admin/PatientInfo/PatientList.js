import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PatientList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source='id' />
        <TextField source='Name' />
        <TextField source='Gender' />
        <DateField source='Date of birth' />
        <TextField source='Martial status'/>
        <TextField source='Children number'/>
        <TextField source='Professional status'/>
        <TextField source='Duration'/>
        <TextField source='Symptom'/>
        <TextField source='Treatment taken'/>
        <TextField source='Level'/>
        <TextField source='Augmentation'/>
        <TextField source='ECT'/>
        <EditButton basePath='/PatientInfo' />
        <DeleteButton basePath='/PatientInfo' />
      </Datagrid>
    </List>
  )
}

export default PatientList