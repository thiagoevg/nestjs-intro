import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CourseModules } from './courses/courses.module';

// URL for estabilishing connection with the database. In an production app it would be located in an environment folder. dotenv
import { MONGODB_CONNECTION } from './constants';

// Estabilish connection with the mongoDB and imports all the necessary routes and schemas. It's like an object which wraps all the necessary information for connecting with the database.
@Module({
  imports: [CourseModules, MongooseModule.forRoot(MONGODB_CONNECTION)],
})
export class AppModule {}
