import { useEffect, useState } from "react"
import Link from './LinkResult'

const LinkInput = () => {
    const [link, setLink] = useState('')
    const [original, setOriginal] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!link) {
            alert('Please add a link')
            return
        }

        setOriginal(link)

        try {
            let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${original}`)

            const data = await res.json()

            const shortenedUrl = data.result.full_short_link
           
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
                <Link original={original} short={shortUrl} />
            )
        }
    </>
  )
}

export default LinkInput