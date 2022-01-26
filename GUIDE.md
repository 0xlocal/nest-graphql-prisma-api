# Step by step create GraphQL code first using Prisma

- initial commit
- upgrade yarn to yarn v3
- yarn add prisma --dev
- yarn prisma init
- add connection db on .env
- define table on schema.prisma
- yarn prisma migrate dev --name initSchema
- nest generate resource posts, choose graphql code first
- change entity and dto like your model on schema.prisma
- add prisma service
- import prisma service on your module
- modify your service logic with prisma service

## Notes

- make sure using `@nestjs/graphql` version <=9.1.2 because above than that required driver option but still no documentation about that.
- make sure using `graphql` version > 15 because nestjs official documentation recommended that.
