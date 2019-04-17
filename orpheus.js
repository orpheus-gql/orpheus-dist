const renderOrpheusGQL = (port, endpoint) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Orpheus GQL</title>
<link rel="apple-touch-icon" sizes="57x57" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/favicon-16x16.png">
<meta name="msapplication-TileColor" content="#00c8c8">
<meta name="msapplication-TileImage" content="https://s3-us-west-1.amazonaws.com/ogql-dist/icon/ms-icon-144x144.png">
<meta name="theme-color" content="#00c8c8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
<div id="root"></div>
<script>const __gqlport = ${port}; const __gqlendpoint = ${JSON.stringify(endpoint)}</script>
<script src="https://s3-us-west-1.amazonaws.com/ogql-dist/bundle3.js"></script>
</body>

</html>`
}

const config = (port = 3500, endpoint = '/graphql') => {
  return (request, response) => {
    response.set('Content-Type', 'text/html')
    response.send(renderOrpheusGQL(port, endpoint));
  }
}

module.exports = config;