import React from 'react';
import * as Yup from 'yup'; 
import { Form, Scope, Input } from '@rocketseat/unform';
import "./styles.css"; 

const initialData = { 
  name: 'Douglas A B Novato',
  email: 'douglasabnovato@abnovato.com.br',
  address: {
    street: 'Hollywood',
    number: '129',
    zipcode: '129129000'
  },
};

const schema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatório'),
  address: Yup.object().shape({
    number: Yup.string().min(3, 'Número precisa de 3 dígitos').required('Campo Obrigatório')
  })
});

function App() {

  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
  }

  return (
    <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
      <img
        src="https://storage.googleapis.com/golden-wind/unform/unform.svg"
        height="150"
        width="175"
        alt="Unform"
      />
      <Input name="name" label="Full name"/><br/>
      <Input name="email" label="E-mail" type="email" />
      <Scope path="address">
        <Input name="street" label="Rua:"/><br/>
        <Input name="number" label="Número:"/><br/>
        <Input name="zipcode" label="ZIP code" />
      </Scope>
      <button type="submit">Enviar</button>
    </Form>    
  );
}

export default App;  