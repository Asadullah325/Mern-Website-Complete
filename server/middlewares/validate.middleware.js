const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {

        console.log(err);

        const status = err.errors[0].status || 400;
        const message = err.errors[0].message || "Validation error";
        const stack = err.errors[0].path || "";

        const error = {
            status,
            message,
            stack
        }
        next(error);
    }
}

export default validate;
