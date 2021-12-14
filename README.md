# uidu-cube

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

The cubejs schema for uidu's workspaces dashboards.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Usage

You'd probably run this as a service inside uidu main repo with

```
docker-compose up cube
```

## Maintainers

[@uidu_org](https://github.com/uidu_org)

## Contributing

When you're working on the uidu-core repo, on a new branch, the submodule is detached from this main repo.
In order to avoid conflicts, you should run the following command:

```
git fetch
git checkout -b <new-branch-name> origin/main
```

Then add your changes and commit them as usual.

## License

MIT © 2021 uidu
