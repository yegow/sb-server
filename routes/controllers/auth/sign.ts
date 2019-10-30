import jsonwebtoken  from 'jsonwebtoken';

const sign = (user: UserDetails) => {
  const admin = user.role === 'admin';

  return jsonwebtoken.sign(
    { userId: user.id, admin },
    process.env.APP_SECRET as any,
    { expiresIn: '24h' }
  )
};

export {
  sign
}
