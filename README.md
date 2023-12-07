# Yarn Workspcaes with Jest Multiple Projects + Find Related Tests

## Setup

```
yarn # install deps and link workspaces
```

## Directory structure

```
.
├── jest.config.js
├── package.json
├── packages
    ├── app
    │   ├── index.js
    │   ├── index.test.js
    │   └── package.json
    ├── button
    │   ├── index.js
    │   ├── index.test.js
    │   └── package.json
    ├── header
    │   ├── index.js
    │   └── package.json
    └── unrelated
        ├── index.js
        ├── index.test.js
        └── package.json
```

## Dependency Graph

```
packages/app/index.js
└── packages/button/index.js
    └── packages/header.index.js
```

## Reproduce bug

```
yarn test:reproduce-bug
# jest --findRelatedTests packages/header/index.js
```

Notice that no tests are found.


## Running without projects

```
yarn test:run-without-projects # You will notice that both packages/button/index.test.js is ran together as well as packages/app/index.test.js
# jest --projects --findRelatedTests packages/header/index.js
```

Notice the command is setting projects to an empty value.

