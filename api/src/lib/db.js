// See https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md#constructor
// for options.

import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()

// Using this as a workaround until Prisma has a chance to work on
// https://github.com/prisma/prisma/issues/2152
export const foreignKeyReplacement = (input) => {
  let output = input
  const foreignKeys = Object.keys(input).filter((k) => k.match(/Id$/))

  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, '')
    const value = input[key]

    delete output[key]
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    })
  })

  return output
}
