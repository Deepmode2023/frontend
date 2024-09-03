FROM oven/bun:1 AS base
WORKDIR /core

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .

VOLUME [ "/core/src" ]

RUN groupadd -r deepmode && useradd -r -g deepmode deepmode
RUN chown -R deepmode:deepmode /core
USER deepmode

EXPOSE 8001

CMD ["bun", "run", "dev", "--port", "8001"]