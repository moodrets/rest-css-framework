export const rsSelect = {
  bind(el){
    setTimeout(() => {
      el.addEventListener('change', e => {
        if (e.target.closest('.rs-select')) {
          if (e.target.options[e.target.selectedIndex]) {
            const text = e.target.options[e.target.selectedIndex].innerText
            e.currentTarget.closest('.rs-select').querySelector('.rs-select__value').setAttribute('data-value', text ? text : '&nbsp;')
          }
        }
      })
      el.dispatchEvent(new Event('change'))
    }, 0);
  }
}
