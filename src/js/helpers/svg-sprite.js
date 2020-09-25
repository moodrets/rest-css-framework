const insertSvgSprite = (mode='dev') => {

  const insert = (data) => {
    document.body.insertAdjacentHTML('beforeend', data)
  }

  if ( localStorage && localStorage.getItem('svg_sprite') && mode == 'prod' ) {

    const sprite = localStorage.getItem('svg_sprite');
    insert(sprite);

  } else {

    fetch('/dist/svg/sprite.svg', {
      method: 'get'
    })
    .then(res => res.text())
    .then(res => {
      localStorage.setItem( 'svg_sprite', res);
      insert(res);
    })
  }
}

insertSvgSprite('dev');
