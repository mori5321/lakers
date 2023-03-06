## Overall Design
https://miro.com/app/board/uXjVOn4wStQ=/?moveToWidget=3458764546583083982&cot=14

<img width="1101" alt="image" src="https://user-images.githubusercontent.com/15435180/222996842-62681338-3f70-4a5c-88d5-38a8475d0cbb.png">



## docker-compose command for porter
```
docker compose build
```

```
docker compose up -d porter
```




## Docker Comand for Porter
### Build
```
docker build -t porter ./Dockerfile.porter
```

### Run for dev 
```
docker run -dit --rm --name porter -p 8080:8080 --mount type=bind,source="$(pwd)",target=/app porter

// -d: daemon
// -i: interactive
// -t: tty
```

```
docker stop porter
```


```
docker exec -it porter sh
```

```
docker logs porter --follow
```


## Try Github Actions by Act
### Setup
```
brew install act
```

### Run
```
act push
```

```
act push --job deploy
```
