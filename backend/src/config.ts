export default {
  mail: {
    email: 'youngjoe263@gmail.com',
    password:'McBank$$',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    rejectUnauthorized: false
  },
  dbConfig: {
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'postgres',
    password: 'McBank$$',
    database: 'mega_shop',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  },
 
  aws: {
    AWS_S3_BUCKET_NAME: 'AWS_S3_BUCKET_NAME',
    Access_Key_ID: 'Access_Key_ID',
    Secret_Access_Key:'Secret_Access_Key',
    cdnUrl: 'cdnUrl'
  }
}
