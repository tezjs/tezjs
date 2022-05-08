import mri from 'mri'
export function main () {
    const args = mri(process.argv.slice(2))
    args.clear = false
    console.log(args)
  }