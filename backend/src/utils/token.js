import jwt from 'jsonwebtoken';
export function signToken(admin){return jwt.sign({sub:admin._id.toString(),role:'admin'},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN||'8h'});}