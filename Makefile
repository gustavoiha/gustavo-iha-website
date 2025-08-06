build-RemixFunction:
	npm install && npm run build && npm prune --omit=dev
	cp -R build node_modules server.js package.json run.sh $(ARTIFACTS_DIR)
