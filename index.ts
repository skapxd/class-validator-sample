import { plainToClass } from "class-transformer";
import { IsBoolean, IsNumber, IsString, validate } from "class-validator";

const jsonData = {
  "id": "1", // -> should fail validate, because it's not a type number
  "title": "Upgrade typescript runtime validation with class decorators",
  "done": false,
}

class Todo {
  @IsNumber()
  id!: number;

  @IsString()
  title!: string;

  @IsBoolean()
  done!: boolean;
}

const convertedClass = plainToClass(Todo, jsonData);

validate(convertedClass)
.then((errors) => console.log('then: ',errors))
