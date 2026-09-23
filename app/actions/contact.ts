'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const organization = String(formData.get('organization') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in your name, email, and message.' }
  }

  if (!isEmail(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  // The inquiry is validated server-side. Wire this up to an email provider
  // (e.g. Resend) or a database to persist and route submissions.
  console.log('[v0] Contact inquiry received:', { name, email, organization, message })

  return {
    status: 'success',
    message: 'Thank you for reaching out. We will be in touch soon.',
  }
}
