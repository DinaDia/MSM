
import { Create, SimpleForm, TextInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput source='pass' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate