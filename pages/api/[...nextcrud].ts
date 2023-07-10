import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/pisma'
// import  prisma from '../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse<unknown>) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter({
      prismaClient: prisma,
    }),
    swagger: {
      title: 'My API CRUD',
      apiUrl: process.env.URL + 'api',
      config: {
        User: {
          tag: {
            name: 'Users',
          },
        }
      },
    },
  })

  return nextCrudHandler(req, res)
}

export default handler