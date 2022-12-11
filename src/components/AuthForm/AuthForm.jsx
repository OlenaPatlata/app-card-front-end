import { memo } from 'react';

import Field from './Field';

const AuthForm = memo(props => (
  <form onSubmit={props.onSubmit} noValidate>
    <Field
      labelText="First name"
      fieldType="text"
      fieldName="firstName"
      fieldValue={props.values.firstName}
      hasError={props.errors.firstName}
      onFieldChange={props.onFieldChange}
    />

    <Field
      labelText="Last name"
      fieldType="text"
      fieldName="lastName"
      fieldValue={props.values.lastName}
      hasError={props.errors.lastName}
      onFieldChange={props.onFieldChange}
    />

    <Field
      labelText="Email"
      fieldType="email"
      fieldName="email"
      fieldValue={props.values.email}
      hasError={props.errors.email}
      onFieldChange={props.onFieldChange}
    />

    <Field
      labelText="Password (+8 characters)"
      fieldType="password"
      fieldName="password"
      fieldValue={props.values.password}
      hasError={props.errors.password}
      onFieldChange={props.onFieldChange}
    />

    <button type="submit">Register</button>
  </form>
));

export default AuthForm;
