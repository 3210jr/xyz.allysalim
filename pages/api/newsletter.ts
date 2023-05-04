import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

// export default NewsletterAPI({
//   provider: siteMetadata.newsletter.provider,
// })

// NewsletterAPI.

const BASE_URL = 'https://api.buttondown.email'
const ENDPOINT = '/v1/subscribers'

// @ts-ignore
export default async function handler(req, res) {
  const API_KEY = process.env.BUTTONDOWN_API_KEY
  const { email } = req.body
  console.log(email, API_KEY)
  const response = await fetch(`${BASE_URL}${ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${API_KEY}`,
    },
    body: JSON.stringify({
      email,
    }),
  })
  console.log(response)
  if (response.status >= 400) {
    return res.status(500).json({ error: `There was an error subscribing to the list.` })
  }
  const data = await response.json()
  console.log(data)
  res.status(200).json({ data })
}

// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
//   // Do whatever you want here, before the request is passed down
//   return await NewsletterAPI(req, res, {
//     provider: ...
//   })
// }
