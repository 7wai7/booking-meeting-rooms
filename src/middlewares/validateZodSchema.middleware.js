import { ZodError } from "zod";

const normalizeIssues = (error) => {
  if (!error) return [];
  if (Array.isArray(error.errors)) return error.errors;
  if (Array.isArray(error.issues)) return error.issues;

  if (typeof error.message === "string") {
    try {
      const maybe = JSON.parse(error.message);
      if (Array.isArray(maybe)) return maybe;
    } catch (e) {
      // ignore
    }
  }

  return [];
};

const formatZodErrors = (error) => {
  const errors = {};
  const issues = normalizeIssues(error);

  issues.forEach((issue) => {
    const path = Array.isArray(issue.path) && issue.path.length
      ? issue.path.join(".")
      : (issue.path || "_root_");
    // Встановити перше повідомлення для поля
    if (!errors[path]) {
      errors[path] = issue.message || "Invalid input";
    } else {
      // Якщо потрібно зберігати масив повідомлень:
      // if (!Array.isArray(errors[path])) errors[path] = [errors[path]];
      // errors[path].push(issue.message || "Invalid input");
    }
  });

  return errors;
};

export const validateZodSchema = (schema, source = "body") => {
  return (req, res, next) => {
    try {
      const data = source === "query" ? req.query
                  : source === "params" ? req.params
                  : req.body;

      // якщо доступно safeParse
      if (typeof schema.safeParse === "function") {
        const parsed = schema.safeParse(data);
        if (!parsed.success) {
          return res.status(400).json({
            success: false,
            message: "Помилки валідації",
            errors: formatZodErrors(parsed.error),
          });
        }
        return next();
      }

      // Якщо safeParse недоступний
      schema.parse(data);
      return next();
    } catch (error) {
      const isZod = error && (error.name === "ZodError" || error instanceof ZodError);
      if (isZod) {
        return res.status(400).json({
          success: false,
          message: "Помилки валідації",
          errors: formatZodErrors(error),
        });
      }
      next(error);
    }
  };
};
