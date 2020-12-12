.PHONY: build run stop

build:
	docker build . --tag apigear/web

run:
	docker run --rm -p 5000:5000 --name apigear-web apigear/web

stop:
	docker stop apigear-web
