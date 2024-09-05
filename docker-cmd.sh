!#/bin/sh

set -e

if [ "$ENV"='DEV' ]; then
    echo "Starting Developing envirement mode!"
    bun run dev --port "$PORT"
elif [ "$ENV"='UNIT' ]; then
    echo "Starting Testing envirement mode!"
    bun run test
else
    echo "Running Production Server"
    exec nginx -g daemon off;

fi