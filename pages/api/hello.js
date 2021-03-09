// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })

  //可以从req拿到form input, 然后插入数据库, call第三方api等
  
}
