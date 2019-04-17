const renderOrpheusGQL = () => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Orpheus GQL</title>
  <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:300,600,700i" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <div id="root"></div>
  <script src="https://s3-us-west-1.amazonaws.com/ogql-dist/bundle.js"></script>
</body>

</html>`
}

const orpheusGQL = (request, response) => {
  response.set('Content-Type', 'text/html')
  response.send(renderOrpheusGQL());
}

module.exports = orpheusGQL;

