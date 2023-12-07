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
└── packages
    ├── app
    │   ├── index.js
    │   ├── index.test.js
    │   └── package.json
    └── button
        ├── index.js
        ├── index.test.js
        └── package.json
    
```

## Dependency Graph

```
packages/app/index.js
└── packages/button/index.js
```

## Reproduce bug

```
jest --findRelatedTests packages/button/index.js
```

Notice that only the test for **button** is found.

## Running without projects

```
jest --projects --findRelatedTests packages/header/index.js
# Notice I'm passing empty --projects, with causes Jest to act as a single root project 
```

Notice that both the test for **app** and **button** are found

