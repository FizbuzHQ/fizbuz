import { db } from 'src/lib/db'

export const connections = () => {
  return db.connection.findMany()
}

export const connection = ({ id }) => {
  return db.connection.findOne({
    where: { id },
  })
}

export const createConnection = ({ input }) => {
  return db.connection.create({
    data: input,
  })
}

export const updateConnection = ({ id, input }) => {
  return db.connection.update({
    data: input,
    where: { id },
  })
}

export const deleteConnection = ({ id }) => {
  return db.connection.delete({
    where: { id },
  })
}

export const Connection = {
  user: (_obj, { root }) => db.connection.findOne({ where: { id: root.id } }).user(),
  user: (_obj, { root }) => db.connection.findOne({ where: { id: root.id } }).user(),
}
