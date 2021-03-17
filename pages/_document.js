import Document, { Html, Head, Main, NextScript } from 'next/document'

class Index extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
            <title>Vikram Singh - FrontEnd developer and Web Designer</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" / >
              <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@900&family=Source+Sans+Pro&display=swap"
              rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Index