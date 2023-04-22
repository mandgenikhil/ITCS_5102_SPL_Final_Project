FROM golang:alpine

ENV GIN_MODE=release
ENV PORT=8081

WORKDIR /go/src/yttt

COPY . /go/src/yttt/src
COPY front-end/build /go/src/yttt/templates

RUN go build yttt/src/api

EXPOSE $PORT

ENTRYPOINT ["./api"]