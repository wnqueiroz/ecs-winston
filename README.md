<h1 align="center">@wnqueiroz/ecs-winston</h1>

<h3 align="center">
A formatter for the <a href="https://github.com/winstonjs/winston">winston</a> logger compatible with <a href="https://www.elastic.co/guide/en/ecs-logging/overview/master/intro.html"> Elastic Common Schema (ECS) 🚀</a>
</h3>

<div align="center">

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![CI/CD](https://github.com/wnqueiroz/ecs-winston/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/wnqueiroz/ecs-winston/actions/workflows/ci-cd.yml)
[![codecov](https://codecov.io/gh/wnqueiroz/ecs-winston/branch/main/graph/badge.svg?token=25EY2SRG1P)](https://codecov.io/gh/wnqueiroz/ecs-winston)

<a href="https://twitter.com/wnqueiroz" alt="Twitter Follow">
  <img src="https://img.shields.io/twitter/follow/wnqueiroz?style=social">
</a>
  
</div>

## Table Of Contents

- [Key Features ✨](#key-features-)
- [Install](#install)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Converting Express `req` and `res`](#converting-express-req-and-res)
  - [Removing ECS fields from the log](#removing-ecs-fields-from-the-log)
- [Roadmap 🚧](#roadmap-)
- [License](#license)

## Key Features ✨

- ECS version [1.12](https://www.elastic.co/guide/en/ecs/1.12/index.html) support.
- IntelliSense of ECS fields in writing logs.
- Automatic field conversion when using [Express](https://expressjs.com/) `req` and `res`. 😍
- Overwrite and omit the values of the ECS fields that you find necessary.

## Install

With NPM:

```sh
npm install @wnqueiroz/ecs-winston
```

Or using Yarn:

```sh
yarn add @wnqueiroz/ecs-winston
```

> 💡 Make sure you are using the [winston@3](https://www.npmjs.com/package/winston).

## Usage

### Basic Usage

```ts
import * as winston from 'winston'
import { ecsWinstonFormat, ECSLog, LogMetadata } from '@wnqueiroz/ecs-winston'

const logger = winston.createLogger({
  level: 'info',
  format: ecsWinstonFormat(),
  transports: [new winston.transports.Console()],
})

const ecs: ECSLog = {
  // IntelliSense here 😍
  labels: {
    application: 'foo',
  },
  tags: ['api'],
}

const log: LogMetadata = {
  ecs,
}

logger.info(log)
logger.info('This is amazing!!', log)
```

```sh
# logger.info(log)
{"@timestamp":"2021-10-08T20:56:37.643Z","labels":{"application":"foo"},"message":"","tags":["api"],"log":{"level":"info"},"ecs":{"version":"1.12.0"}}

# logger.info('This is amazing!!', log)
{"@timestamp":"2021-10-08T20:56:37.649Z","labels":{"application":"foo"},"message":"This is amazing!!","tags":["api"],"log":{"level":"info"},"ecs":{"version":"1.12.0"}}
```

### Converting Express `req` and `res`

Let's configure a simple express application that, when finalizing a HTTP Request, an access log will be created:

```ts
import { ecsWinstonFormat, LogMetadata } from '@wnqueiroz/ecs-winston'
import * as winston from 'winston'
import express, { Request, Response } from 'express'

const app = express()

const logger = winston.createLogger({
  level: 'info',
  format: ecsWinstonFormat(),
  transports: [new winston.transports.Console()],
})

app.get('/', (req: Request, res: Response) => {
  const payload = {
    data: 'foo',
  }

  res.locals.body = payload // will be injected into http.response.body.content

  req.on('end', () => {
    const log: LogMetadata = {
      req,
      res,
    }

    logger.info('access log', log)
  })

  res.json(payload)
})

const port = 3000

app.listen(port, () => {
  logger.info(`app listening at http://localhost:${port}`)
})
```

When making the HTTP Request `GET http://localhost:3000`, the log displayed will look something like:

```json
{
  "@timestamp": "2021-10-09T20:31:08.828Z",
  "message": "access log",
  "log": {
    "level": "info"
  },
  "ecs": {
    "version": "1.12.0"
  },
  "http": {
    "version": "1.1",
    "request": {
      "id": "",
      "method": "GET",
      "headers": {
        "user-agent": "Thunder Client (https://www.thunderclient.io)",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "host": "localhost:3000",
        "connection": "close"
      },
      "body": {}
    },
    "response": {
      "status_code": 200,
      "mime_type": "application/json; charset=utf-8",
      "body": {
        "bytes": 14,
        "content": {
          "data": "foo"
        }
      }
    }
  },
  "user_agent": {
    "original": "Thunder Client (https://www.thunderclient.io)"
  }
}
```

### Removing ECS fields from the log

It's possible to configure the formatter to exclude ECS properties by default (from all written logs):

```ts
import { ecsWinstonFormat, LogMetadata } from '@wnqueiroz/ecs-winston'
import * as winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: ecsWinstonFormat({
    exclude: ['http.request.headers.authorization'], // will remove this property from all logs by default.
  }),
  transports: [new winston.transports.Console()],
})
```

Or delete the property from that log only:

```ts
const log: LogMetadata = {
  ecs: {
    message: 'exclude example',
    labels: {
      application: 'foo', // will be removed
      foo: 'bar',
    },
  },
  exclude: ['labels.application'],
}

logger.info(log)
// {"@timestamp":"2021-10-11T14:40:35.163Z","labels":{"foo":"bar"},"message":"exclude example","log":{"level":"info"},"ecs":{"version":"1.12.0"}}
```

> 💡 It is possible to combine the two strategies: excluding properties by default (at configuration) and from a specific log.

## Roadmap 🚧

- Integration with [Elastic APM](https://www.elastic.co/apm/).

## License

This software is licensed under the [MIT license](./LICENSE).
