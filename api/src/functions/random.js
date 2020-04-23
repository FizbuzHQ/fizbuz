export const handler = (event, context, cb) => {
  console.log(event, context, cb)
  cb({ hello: 'world' })
}
