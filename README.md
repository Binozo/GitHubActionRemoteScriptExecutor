# Remote Script Executor
An action which works 🤝 with [GoRemoteScriptExecutor](https://github.com/Binozo/GoRemoteScriptExecutor)\
Developed to automatically run scripts on a target server through GitHub Actions.

## Inputs
### `server-address`
**Required** Server Address (e.g. 192.200.12.3)

### `script-name`
**Required** Shell Script filename which you want to run. (Has to be on the target machine) (e.g. myscript.sh)

### `password`
**Required** A connection password. (Take a look at [setup](https://github.com/Binozo/GoRemoteScriptExecutor))

## Example usage
```yaml
  - uses: binozo/githubactionremotescriptexecutor@v1.2
    with:
      server-address: 192.200.12.3
      script-name: myscript.sh
      password: ${{ secrets.server_password }}
```