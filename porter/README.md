

## Docker Comand for Porter
### Build
```
docker build -t porter-dev .
```

### Run for dev 
```
docker run -dit --rm --name porter-dev -p 8080:8080 --mount type=bind,source="$(pwd)",target=/app porter-dev

// -d: daemon
// -i: interactive
// -t: tty
```

```
docker stop porter-dev
```


```
docker exec -it porter-dev sh
```

```
docker logs porter-dev --follow
```
