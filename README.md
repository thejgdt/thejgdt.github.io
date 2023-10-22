<h1><b>Running this website on your local network</b></h1>

### Installing Node.js and npm:

1. Visit the [official Node.js website](https://nodejs.org/).
2. Download the LTS version (recommended for most users).
3. Run the installer and follow the installation instructions.

### Using PowerShell for npm:

1. Open a new terminal window.

2. Verify that Node.js and npm are installed by running the following commands:

    ```terminal
    node -v
    npm -v
    ```

   These commands should print the version numbers of Node.js and npm if they are installed correctly.

3. If the commands above give errors, it means Node.js and npm are not installed, or their paths are not added to the system PATH. Ensure that you've installed Node.js and npm correctly.

### Installing `http-server`:

Once Node.js and npm are installed, you can install `http-server`:

```terminal
npm install -g http-server
```

### Running `http-server`:

1. Navigate to your project directory using PowerShell.

2. Run the following command to start the server:

    ```terminal
    http-server
    ```

3. The server will provide a URL (usually http://127.0.0.1:8080). Open this URL in your web browser.

This should resolve the issue, and you should be able to use `fetch` in your JavaScript code without encountering "Failed to fetch" errors.