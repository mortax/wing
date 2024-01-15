/**
 * Emits a log message to the console if the DEBUG environment variable is set.
 * @param args Arguments to pass to console.error.
 */
export function log(message: string, newline?: boolean) {
  if (process.env.DEBUG) {
    if (typeof newline !== "undefined") {
      console.error(message);
    } else {
      process.stderr.write(message);
    }
  }
}
