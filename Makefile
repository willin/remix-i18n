
.PHONY: clean build test install document
all: build

clean:
	rm -rf `find . -name dist`

install:
	yarn install

build:
	yarn build

test:
	yarn test:cov

document: build
	rm -rf documents/node_modules/remix-i18n/browser
	rm -rf documents/node_modules/remix-i18n/dist
	cp -r browser documents/node_modules/remix-i18n/browser
	cp -r dist documents/node_modules/remix-i18n/dist
	cd ./documents && yarn dev
