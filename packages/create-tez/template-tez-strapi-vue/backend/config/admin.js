module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a300c1124ae1790e1973beed02d383de'),
  },
});
