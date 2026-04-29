class IxToast extends HTMLElement {
  connectedCallback() {
    this.setAttribute('aria-live', 'polite')
  }

  show({
    title = '',
    message = '',
    intent = 'neutral',
    duration = 3000,
    variant = 'fade'
  }) {
    const toast = document.createElement('aside')

    toast.setAttribute('role', 'status')
    toast.setAttribute('data-intent', intent)
    toast.setAttribute('data-variant', variant)

    
    toast.innerHTML = `
      <strong>${title || intent}</strong>
      <span>${message}</span>
      <button>OK</button>
    `

    this.appendChild(toast)

    toast.querySelector('button').onclick = () => toast.remove()

    requestAnimationFrame(() => {
      toast.setAttribute('data-open', 'true')
    })

    setTimeout(() => {
      toast.removeAttribute('data-open')
      setTimeout(() => toast.remove(), 200)
    }, duration)
  }
}

if (!customElements.get('ix-toast')) {
  customElements.define('ix-toast', IxToast)
}