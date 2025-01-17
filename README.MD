## hCaptcha TypeScript Definitions

TypeScript module for `hcaptcha` global variable.

### Installation

```bash

yarn add -D @hcaptcha/types

```

or via npm

```bash

npm install -D @hcaptcha/types

```

### How to use

#### Locally in file

```ts
import "@hcaptcha/types";

// `hcaptcha` now is defined on the global object

hcaptcha.execute();
```

or

```ts
///<reference types="@hcaptcha/types"/>

// `hcaptcha` now is defined on the global object

hcaptcha.execute();
```

#### Globally

Add import or reference to your `.d.ts`:

```ts
import "@hcaptcha/types";

// or

/// <reference types="@hcaptcha/types"/>
```

Or add `"node_modules/@hcaptcha"` to the `typeRoots` in `tsconfig.json`

```json
{
  "compilerOptions": {
    // ...

    "typeRoots": ["node_modules/@hcaptcha"]

    // ...
  }

  // ...
}
```

### Bug Report

If you encounter an issue and would like to report it, please email us at [support@hcaptcha.com](mailto:support@hcaptcha.com).
