import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
// Session
import session from "express-session";

const getExpressApp = async function () {
  const app = express();

  app.use(cors());
  app.use(express.urlencoded());
  app.use(express.json());

  // Session
  app.use(
    session({
      secret: "Shh, its a secret!",
      cookie: { secure: false, maxAge: 60000 },
      name: "connect.sid",
    })
  );

  app.get("/", (req, res) => {
    if (req.session.page_views) {
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
    } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
    }
  });

  return app;
};

export { getExpressApp };
