// Nestjs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// Routes
import { CoursesController } from './controllers/courses.controller';
import { CoursesRepository } from './repositories/courses.repository';
// Schema
import { CoursesSchema } from './Schemas/courses.schema';

// It wraps the schema and the routes used in the collection
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CoursesSchema }]),
  ],
  controllers: [CoursesController],
  providers: [CoursesRepository],
})
export class CourseModules {}
