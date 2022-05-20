module.exports = function backofficeAPI(app, databaseConnection) {

  db = databaseConnection;

  app.get('backoffice/api/tables', (req, res) => res.json(db.tables));
  app.get('backoffice/api/views', (req, res) => res.json(db.views));

  for (let name of [...db.tables, ...db.views]) {

    app.get('backoffice/api/' + name, (req, res) => {
      runQuery(name, req, res, {}, `
        SELECT *
        FROM ${name}
      `);
    });

    app.get('backoffice/api/' + name + '/:id', (req, res) => {
      runQuery(name, req, res, req.params, `
        SELECT *
        FROM ${name}
        WHERE id = $id
      `, true);
    });

    if (db.views.includes(name)) {
      continue;
    }

    app.post('backoffice/api/' + name, (req, res) => {
      delete req.body.id;
      runQuery(name, req, res, req.body, `
        INSERT INTO ${name} (${Object.keys(req.body)})
        VALUES (${Object.keys(req.body).map(x => '$' + x)})
      `);
    });

    let putAndPatch = (req, res) => {
      runQuery(name, req, res, { ...req.body, ...req.params }, `
        UPDATE ${name}
        SET ${Object.keys(req.body).map(x => x + ' = $' + x)}
        WHERE id = $id
      `);
    };

    app.put('backoffice/api/' + name + '/:id', putAndPatch);
    app.patch('backoffice/api/' + name + '/:id', putAndPatch);

    app.delete('backoffice/api/' + name + '/:id', (req, res) => {
      runQuery(name, req, res, req.params, `
        DELETE FROM ${name}
        WHERE id = $id
      `);
    });

  }

  app.all('backoffice/api/*', (req, res) => {
    res.status(404);
    res.json({ _error: 'No such route!' });
  });

  app.use((error, req, res, next) => {
    if (error) {
      let result = {
        _error: error + ''
      };
      res.json(result);
    }
    else {
      next();
    }
  });

}