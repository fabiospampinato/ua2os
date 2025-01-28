# UA2OS

Detect the OS from a User-Agent string.

Only the following OSes are supported: `linux`, `mac`, `windows`, `android`, `ios`.

## Install

```sh
npm install ua2os
```

## Usage

```ts
import ua2os from 'ua2os';

// Let's detect the OS from some User-Agent strings

ua2os ( 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' ) // => 'linux'
ua2os ( 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' ) // => 'mac'
ua2os ( 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36' ) // => 'windows'
ua2os ( 'Mozilla/5.0 (Linux; U; Android 2.2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1' ) // => 'android'
ua2os ( 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148' ) // => 'ios'
ua2os ( 'Nokia7610/2.0 (5.0509.0) SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0' ) // => undefined
```

## License

MIT © Fabio Spampinato
