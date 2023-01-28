import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
  } from 'react-admin'

const patientsList = (props) => {
  return (
    <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='Name' />
      <TextField source='Gender' />
      <TextField source='Phone' />
      <DateField source='birthDate' />
      <TextField source='martialStatus' />
      <TextField source='childrenNo' />
      <TextField source='Duration' />
      <TextField source='symptom' />
      <TextField source='treatment' />
      <TextField source='level' />
      <TextField source='Msm' />
      <TextField source='aug' />
      <TextField source='ect' />
      <DeleteButton basepath='/patients' />
    </Datagrid>
  </List>
  )
}

export default patientsList