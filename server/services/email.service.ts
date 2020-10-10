import config from '../config'
import fetch from 'isomorphic-unfetch'

/**
 * Connect with email service
 */
const EmailService = () => {
  /**
     * call POST on /email/sendEmail
     * @param {Array} emailArr - an array of data needed to create emails
     */
  const sendEmails = async (emailArr: Object[]) => {
    try {
      await fetch(`${config.EMAIL_SERVICE_URL}email/send-stats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailArr)
      })
    } catch (e) {
      throw new Error('Unable to send deposit email')
    }
  }

  return {
    sendEmails
  }
}

export default EmailService
