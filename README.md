# Scale-crop-image
Web service for cropping and scaling cropped image in one http request

## How to build

```sh
npm i --production
```

## How to run

```sh

```

## How to use

```sh
GET /img?href=http://example.com/img.png&x=0&y=0&w=640&h=320&s=1
```

```sh
Parameters:

href - original image url
X,Y - top left of cropped image
W - width of cropped image
H - height of cropped image
S - scale of cropped image
```

## Build docker image

```sh
docker build -t scale-crop-image .
```

## Run docker container

```sh
docker run -d -p 3000:3000 scale-crop-image
```
