import { useState } from "react"
import Link from './LinkResult'

const LinkInput = () => {
    const [link, setLink] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!link) {
            alert('Please add a link')
            return
        }

        try {
            let res = await fetch('https://api.urlo.in/api/short-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    originalUrl: link,
                })
            })

            const data = await res.json()

            const shortenedUrl = data.data.shortUrl
           
            setShortUrl(shortenedUrl)
        } catch(err) {
            console.log(err)
        }
    }

  return (
      <>
        <div className="input__block">
            <div className="container form__url">
            <form action="" onSubmit={onSubmit}>
                <input className="url-input" type="url" placeholder='Shorten a link here...' value={link} onChange={e => setLink(e.target.value)} required/>
                <input className="input-submit" type="submit" value="Shorten it!" />
            </form>
            </div>
        </div>
        {
            shortUrl && (
                <Link original={link} short={shortUrl} />
            )
        }
    </>
  )
}

export default LinkInput