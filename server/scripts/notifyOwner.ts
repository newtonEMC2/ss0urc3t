
import fs from 'fs'
import moment from 'moment'
import config from '../config'
import emailService from '../services/email.service'

/**
 * Return email data for as many as required
 * @param {String} subject - email's subject
 * @param {String} name    - who is it for?
 * @param {String} to      - receiver's email
 * @param {Number} files   - Number of files processed
 * @returns {Array}
 */
const buildEmailBody = (subject: String, name: String, to: String, files: Number): Object[] => {
  return [
    {
      subject,
      to,
      body: `
        ${name},
        today ${moment().format('MMM Do YY')}, ${files} licences has been processed
      `
    }
  ]
}

/**
 * Controlles the codeflow
 */
const controller = async () => {
  try {
    // read how many files in tmp
    const files = fs.readdirSync(`${process.cwd()}/tmp`).length

    // build email's body
    const emailBody = buildEmailBody('today\'s licences processed', 'Richard', config.OWNER_EMAIL, files)

    //
    await emailService().sendEmails(emailBody)
  } catch (e) {
    throw new Error(e)
  }
}

export default controller
