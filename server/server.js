const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

server.patch('/items/:id/done', (req, res) => {
    const id = Number(req.params.id);
    const item = db.get('items').find({ id }).value();

    if (!item) {
        return res.sendStatus(404);
    }

    const updatedItem = {
        ...item,
        isDone: !item.isDone,
        finishedAt: item.isDone ? undefined : Date.now(),
    };

    db.get('items').find({ id }).assign(updatedItem).write();
  
    res.json(updatedItem);
  });

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
