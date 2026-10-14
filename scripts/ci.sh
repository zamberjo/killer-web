#!/usr/bin/env bash
# El CI de este repositorio, en local (docs/adr/0017).
#
#   scripts/ci.sh fast   # pre-commit: formato, lint y tipos
#   scripts/ci.sh full   # pre-push: lo mismo que .github/workflows/ci.yml
#
# Comprueba el árbol de trabajo, no solo lo preparado para el commit.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

mode="${1:-full}"
step() { printf '\n── %s\n' "$*"; }

[[ -d node_modules ]] || npm ci

# Lo mismo que `npm run lint`, pero solo sobre lo versionado: en local suele
# haber ficheros sin seguimiento (skills, ajustes del editor) que el CI nunca
# ve y que `prettier --check .` revisaría.
step "Formato y lint"
git ls-files -z | xargs -0 npx prettier --check --ignore-unknown
git ls-files -z -- '*.js' '*.ts' '*.svelte' | xargs -0 npx eslint --no-warn-ignored

step "Tipos"
npm run check

[[ "$mode" == "fast" ]] && exit 0

step "Build estático"
npm run build

# La landing se prerenderiza entera; si el build no deja un index.html con
# contenido, se ha roto el prerender sin que el build fallara.
step "El prerender produjo HTML"
test -f build/index.html
grep -q 'battle royale' build/index.html

# playwright.config.ts levanta `npm run build && npm run preview`: las pruebas
# corren contra el build de producción, no contra el dev server.
step "E2E (Playwright)"
npx playwright test
