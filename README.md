<div style="text-align: center;">
  <a href="https://event.impactbyte.com">
    <h1>
      <img src="./assets/eventbyte.png" alt="EventByte Logo">
    </h1>
  </a>
</div>

# EventByte API

- Official: https://event-api.impactbyte.com
- API: https://impactbyte-api.herokuapp.com

## Setup

Setup your repo first:

```sh
./setup.sh
```

## Connect to Database

### Local

```sh
mongo
```

### MongoDB Atlas

- Connection:
  - Type: Direct Connection
  - Name: YourPreferredName
  - Address: `databasename-shard-00-00-sppjs.mongodb.net`
  - Port: `27017`
- Authentication:
  - [x] Perform Authentication
  - Database: admin
  - User Name: yourusername
  - Password: yourpassword
  - Auth Mechanism: SCRAM-SHA-1
- SSL:
  - [x] Use SSL protocol

## Development

```sh
yarn
yarn dev
```

## Testing

```sh
yarn test
```

## Deployment

```sh
yarn deploy
```
