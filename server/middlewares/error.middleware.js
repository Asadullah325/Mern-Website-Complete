const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    const stack = err.stack || "";
    return res.status(status).json({ message, stack });
};

export default errorMiddleware;