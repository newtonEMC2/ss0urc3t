import controller from '../scripts/notifyOwner'

try {
  controller().then(() => process.exit()).catch(() => process.exit())
} catch (e) {
  console.log(e)
  process.exit(1)
}
