module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Quiz</title>
  <link rel="stylesheet" href="/Style/style.css" />
</head>
<body>
  <section class="container">
    ${content}
  </section>
</body>
</html>
`
}