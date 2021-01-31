import React from 'react'
import SvgIcon from './SvgIcon'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="rs-header bg-info-1 py-4 sh-2 mb-9 pos-sti pos-cover-0 pos-b-0 z-10">
      <div className="container mx-a px-4 px-6:lg">
        <div className="d-f ai-c jc-sb">
          <Link to="/" className="txt-dark">
            <SvgIcon name="rs-logo" addClass="sz-5"></SvgIcon>
          </Link>
          <a className="txt-dark" target="_blank" href="https://github.com/moodrets/rest-css-framework">
            <SvgIcon name="rs-github"></SvgIcon>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
