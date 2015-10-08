ifeq ($(shell uname), Linux)
	$BROWSER='chromium'
else
	$BROWSER='chrome'
endif

start:
	./node_modules/.bin/browser-sync start --config bs-config.js

test:
	#./node_modules/.bin/browser-sync start --config bs-config.js --startPath test.html
	./node_modules/.bin/browser-sync start --config bs-config-test.js

test-cli:
	# cat test.html | node_modules/.bin/browser-run -b $($BROWSER) -i html -s . | node_modules/.bin/faucet
	cat test.html | ../browser-run/bin/bin.js -b $($BROWSER) -i html -s . | node_modules/.bin/faucet

test-headless:
	# cat test.html | node_modules/.bin/browser-run -i html -s . | node_modules/.bin/faucet
	cat test.html | ../browser-run/bin/bin.js -i html -s . | node_modules/.bin/faucet

.PHONY: test
