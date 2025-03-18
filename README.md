This repo is an attempt to reproduce [TypeScript#61400](https://github.com/microsoft/TypeScript/issues/61400).
It might be an insufficient reproduction.
Please inspect the memory usage due to usage of enums in maps using the `keyof` directive.

Run `npm test` to log TS diagnostics and compare them to [diagnostics.txt](./diagnostics.txt).
