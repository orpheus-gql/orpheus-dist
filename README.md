# orpheus-dist

## installation
```
npm i orpheus-gql
```

## installation

1. Import OrpheusGQL into your app
2. configure Orpheus with your endpoint URL
3. navigate to '/orpheus' to use the GUI

``` javascript
const orpheus = require('orpheus-gql');
const orph = oprheus.config('http://localhost:[your-port]/[graphql endpoint]');

app.use('/graphql', graphqlHTTP(request=>{
    return {
        schema,
        context: orpheus.context(),
        graphiql: true,
        extensions: orpheus.extension
    }
}))

app.get('/orpheus', orph)
```