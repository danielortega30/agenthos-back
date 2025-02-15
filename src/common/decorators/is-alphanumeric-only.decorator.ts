/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function IsAlphanumericOnly(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isAlphanumericOnly',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'Field must contain only alphanumeric characters',
        ...validationOptions,
      },
      validator: {
        validate(value: any, _: ValidationArguments) {
          return typeof value === 'string' && /^[a-zA-Z0-9]+$/.test(value);
        },
      },
    });
  };
}
