import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="auth0Sub"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="auth0Sub"
          defaultValue={props.user?.auth0Sub}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="auth0Sub" className={CSS.errorMessage} />

        <Label
          name="email"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="email"
          defaultValue={props.user?.email}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="email" className={CSS.errorMessage} />

        <Label
          name="productEmail"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="productEmail"
          defaultValue={props.user?.productEmail}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="productEmail" className={CSS.errorMessage} />

        <Label
          name="promotionalEmail"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="promotionalEmail"
          defaultValue={props.user?.promotionalEmail}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="promotionalEmail" className={CSS.errorMessage} />

        <Label
          name="deletedAt"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="deletedAt"
          defaultValue={props.user?.deletedAt}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="deletedAt" className={CSS.errorMessage} />

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
