import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validationMiddleware() {
    return async (req, res, next) => {
        const dto = plainToInstance(type, req.body);
        const errors = await validate(dto);

        if (errors.length > 0) {
            const errorMessages = errors.map(error => Object.values(error.constraints || {})).flat();
            return res.status(400).json({ errors: errorMessages });
        }
        req.body = dto;
        next();
    };
}