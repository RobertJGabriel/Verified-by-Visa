# Verified-by-Visa

> Find the nth characters of your Verified by Visa password without counting.

Verified by Visa asks for specific characters of a long password — "enter
characters 2, 6 and 21". Counting them by hand is tedious and error-prone. This
prints your password with each character's position lined up beneath it.

## Install

```sh
npm install -g verified-by-visa
```

## Usage

```sh
verifiedbyvisa -p "your-password"
```

Output shows the password with a position index under each character, so you can
read off whichever ones the form is asking for.

## Options

| Flag | Description |
| --- | --- |
| `-p, --password <password>` | The password to index |
| `-V, --version` | Print the version |

## A note on safety

This passes a password as a command-line argument, which means it can land in your
shell history and be visible to other processes on the machine. Clear your history
afterwards, or prefix the command with a space if your shell is configured to skip
those.

## License

ISC © Robert James Gabriel
