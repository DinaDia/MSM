
import { Edit, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput source='pass' />

      </SimpleForm>
    </Edit>
  )
}

export default UserEdit