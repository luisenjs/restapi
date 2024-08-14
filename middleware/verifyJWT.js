const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Token no proporcionado");
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        res.status(200).json({ message: 'Token válido', data: decoded });
    } catch (error) {
        return res.status(403).send("Token inválido");
    }
};