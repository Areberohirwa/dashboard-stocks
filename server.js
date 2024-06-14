import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import { MongoClient, ServerApiVersion } from 'mongodb';
// import fs from 'node:fs'

const app = express()
const port = 8080

dotenv.config();
const connectionString = process.env.DB;
const client = new MongoClient(connectionString);
let conn;

app.use(express.static('../public'));
app.use(cors());
app.use(bodyParser.json());

try {
    conn = await client.connect();
    console.log("Connected successfully to server");
} catch (error) {
    console.error(error);

}

const clients = new MongoClient(connectionString, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function fetchCrypto() {
    try {
        await client.connect();
        const database = client.db("crypto");
        const collection = database.collection('cryptoData');
        const cheese = await collection.find().toArray();
        return cheese;
    } finally {
        await client.close();
    }
}

async function fetchCommodity() {
    try {
        await client.connect();
        const database = client.db("commodities");
        const collection = database.collection('commoditiesData');
        const cheeses = await collection.find().toArray();
        return cheeses;
    } finally {
        await client.close();
    }
}

async function fetchStocks() {
    try {
        await client.connect();
        const database = client.db("Stocks");
        const collection = database.collection('stocksData');
        const cheeses = await collection.find().toArray();
        return cheeses;
    } finally {
        await client.close();
    }
}

async function fetchForex() {
    try {
        await client.connect();
        const database = client.db("forex");
        const collection = database.collection('forexData');
        const forexes = await collection.find().toArray();
        return forexes;
    } finally {
        await client.close();
    }
}

async function fetchVisitors() {
    try {
        await client.connect();
        const database = client.db("visitors");
        const collection = database.collection('visitorsData');
        const cheeses = await collection.find().toArray();
        return cheeses;
    } finally {
        await client.close();
    }
}

async function fetchGoal() {
    try {
        await client.connect();
        const database = client.db("goal");
        const collection = database.collection('goalData');
        const cheeses = await collection.find().toArray();
        return cheeses;
    } finally {
        await client.close();
    }
}

app.get('/market.html', (req, res) => {
    res.send('Hello World!')
});

app.get('/goal', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fetchGoal().then(goal => {
        res.json(goal);
    });
});

app.get('/visitors', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fetchVisitors().then(visitor => {
        res.json(visitor);
    });
});

app.get('/forex', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fetchForex().then(foreex => {
        res.json(foreex);
    });
});

app.get('/crypto', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fetchCrypto().then(cheeses => {
        res.json(cheeses);
    });
});

app.get('/commodity', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fetchCommodity().then(cheese => {
        res.json(cheese);
    });
});

app.get('/stocks', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fetchStocks().then(stock => {
        res.json(stock);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});