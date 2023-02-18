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
