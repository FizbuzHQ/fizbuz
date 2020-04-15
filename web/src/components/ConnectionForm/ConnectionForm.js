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

const ConnectionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.connection?.id)
  }

  return (
    <div className="box-border text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-4 mb-4"
          titleClassName="mt-0 font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="userId"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="userId"
          defaultValue={props.connection?.userId}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="userId" className={CSS.errorMessage} />

        <Label
          name="connectedId"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="connectedId"
          defaultValue={props.connection?.connectedId}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="connectedId" className={CSS.errorMessage} />

        <Label
          name="pin"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="pin"
          defaultValue={props.connection?.pin}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="pin" className={CSS.errorMessage} />

        <Label
          name="comment"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="comment"
          defaultValue={props.connection?.comment}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="comment" className={CSS.errorMessage} />

        <Label
          name="deletedAt"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="deletedAt"
          defaultValue={props.connection?.deletedAt}
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

export default ConnectionForm
